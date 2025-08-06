import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { PlanningData } from '@/types/planning.type';
import { styles } from '@/styles/components/planning/planningCard.style';
import { COLORS } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { METRICS } from '@/constants/metrics';

type Props = {
    planning: PlanningData;
    onEdit?: () => void;
    onDelete?: () => void;
    onConfirmBooking?: () => void;
    onAttachmentPress?: () => void;
};

const getNightCount = (start: Date, end: Date) => {
    const diff = new Date(end).getTime() - new Date(start).getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24));
};

const PlanningCard = ({ planning, onEdit, onDelete, onConfirmBooking, onAttachmentPress }: Props) => {
    const start = new Date(planning.startDate!);
    const end = new Date(planning.endDate!);

    const nights = getNightCount(start, end);
    const pricePerNight =
        planning.price && nights > 0 ? (planning.price / nights).toFixed(2) : null;

    const getPlanningTitle = (planning: PlanningData): string => {
        if (planning.type === 'transport') {
            const label = planning.transportMode
                ? planning.transportMode.charAt(0).toUpperCase() + planning.transportMode.slice(1)
                : 'Transport';
            if (planning.departureCity && planning.arrivalCity) {
                return `${label ?? 'Transport'} ${planning.departureCity} → ${planning.arrivalCity}`;
            }
            return label ?? 'Transport';
        }

        return planning.title ?? '';
    };

    return (
        <View
            style={[
                styles.card,
                {
                    borderWidth: 2,
                    borderColor: planning.booked ? COLORS.green : COLORS.orange,
                },
            ]}
        >
            <View style={{ width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 12 }}>
                    <TouchableOpacity onPress={onAttachmentPress}>
                        <Ionicons name="attach-outline" size={METRICS.font.large} color={COLORS.link} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onDelete}>
                        <Ionicons name="trash-outline" size={METRICS.font.large} color={COLORS.red} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={[styles.cardTitle]}
                >
                    {getPlanningTitle(planning)}
                </Text>
            </View>

            {/* Dates */}
            <Text style={styles.cardElement}>
                📅{' '}
                {!planning.endDate ||
                    new Date(planning.startDate!).toISOString().split('T')[0] ===
                    new Date(planning.endDate!).toISOString().split('T')[0]
                    ? new Date(planning.startDate!).toLocaleDateString('fr-FR')
                    : `${new Date(planning.startDate!).toLocaleDateString('fr-FR')} → ${new Date(
                        planning.endDate!
                    ).toLocaleDateString('fr-FR')}`}
            </Text>

            {/* Lien */}
            {planning.link && (

                <Text
                    style={[styles.cardLinks]}
                    onPress={() =>
                        Linking.openURL(planning.link!)}
                >
                    {planning.link}
                </Text>
            )}

            {/* Lieu */}
            {planning.location && (
                <Text
                    style={[styles.cardLinks]}
                    onPress={() =>
                        Linking.openURL(
                            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                planning.location!
                            )}`
                        )
                    }
                >
                    🏠 {planning.location}
                </Text>
            )
            }

            {/* Prix */}
            {planning.price !== null && (
                <Text style={styles.cardElement}>
                    💶 {planning.price} €
                    {planning.type === 'hebergement' && nights > 0 && (
                        <> pour {nights} nuit{nights > 1 ? 's' : ''} {pricePerNight && `(${pricePerNight} €/nuit)`}</>
                    )}
                </Text>
            )}

            {/* Réservé */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Text style={styles.cardElement}>🔖 Réservé :</Text>
                <Text
                    style={[
                        styles.cardElement,
                        {
                            color: planning.booked ? COLORS.green : COLORS.orange,
                            fontWeight: '600',
                        },
                    ]}
                >
                    {planning.booked ? 'Oui' : 'Non'}
                </Text>
            </View>

            {/* 📝 Note si elle existe */}
            {
                planning.note && planning.note.length > 0 && (
                    <Text style={styles.cardElement}>
                        📝 {planning.note}
                    </Text>
                )
            }
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 12 }}>
                <TouchableOpacity
                    style={[styles.buttonBase, styles.buttonEdit, { flex: 1 }]}
                    onPress={onEdit}
                >
                    <Text style={styles.buttonEditText}>✏️ Modifier</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.buttonBase,
                        planning.booked ? styles.buttonCancel : styles.buttonConfirm,
                        { flex: 1 },
                    ]}
                    onPress={onConfirmBooking}
                >
                    <Text
                        style={
                            planning.booked ? styles.buttonCancelText : styles.buttonConfirmText
                        }
                    >
                        {planning.booked ? '❌ Annuler' : '✅ Réserver'}
                    </Text>
                </TouchableOpacity>
            </View>

        </View >
    );
};

export default PlanningCard;
