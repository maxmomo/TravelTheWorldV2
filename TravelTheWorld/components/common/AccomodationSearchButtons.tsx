import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Linking,
    Alert,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

type Props = {
    location?: string | null;
    startDate?: Date | null;
    endDate?: Date | null;
    adults?: number;
    children?: number;
};

const formatDate = (date: Date) => date.toISOString().split('T')[0];

const AccommodationSearchButtons = ({ location, startDate, endDate, adults, children }: Props) => {
    const handleOpen = (platform: 'booking' | 'airbnb' | 'hostel') => {
        if (!location || !startDate || !endDate) return;

        const loc = encodeURIComponent(location);
        const checkin = formatDate(startDate);
        const checkout = formatDate(endDate);
        const a = adults ?? 1;
        const c = children ?? 0;
        let url = '';

        switch (platform) {
            case 'booking':
                url = `https://www.booking.com/searchresults.html?ss=${loc}&checkin=${checkin}&checkout=${checkout}&group_adults=${a}&group_children=${c}&no_rooms=1`;
                break;
            case 'airbnb':
                url = `https://www.airbnb.fr/s/${loc}/homes?checkin=${checkin}&checkout=${checkout}&adults=${a}&children=${c}`;
                break;
        }

        Linking.openURL(url);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>🔍 Rechercher ton hébergement sur :</Text>

            <TouchableOpacity
                style={[styles.button, { borderColor: COLORS.bookingBlue }]}
                onPress={() => handleOpen('booking')}
            >
                <Ionicons name="bed-outline" size={20} color={COLORS.bookingBlue} style={styles.icon} />
                <Text style={[styles.text, { color: COLORS.bookingBlue }]}>Booking</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, { borderColor: COLORS.airbnbRed }]}
                onPress={() => handleOpen('airbnb')}
            >
                <FontAwesome5 name="airbnb" size={20} color={COLORS.airbnbRed} style={styles.icon} />
                <Text style={[styles.text, { color: COLORS.airbnbRed }]}>Airbnb</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    label: {
        fontSize: METRICS.font.medium,
        color: COLORS.black2,
        marginBottom: METRICS.spacing,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: METRICS.radius,
        padding: METRICS.padding * 0.8,
        marginBottom: METRICS.spacing,
    },
    icon: {
        marginRight: METRICS.spacing * 0.55,
    },
    text: {
        fontWeight: 'bold',
        fontSize: METRICS.font.medium
    },
});

export default AccommodationSearchButtons;
