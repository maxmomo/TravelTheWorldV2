import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styleSelectorStyles as styles } from '@/styles/components/styleSelector.style';
import { StyleSelectorProps, TripStyle  } from '@/types/components/form.types';

const options: { key: TripStyle; label: string }[] = [
    { key: 'backpack', label: '🎒 Backpack' },
    { key: 'confort', label: '🏨 Confort' },
    { key: 'luxe', label: '✨ Luxe' },
    { key: 'van', label: '🚐 Van' },
];

const StyleSelector = ({ selectedStyle, onSelect }: StyleSelectorProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>🧳 Style de voyage</Text>
            <View style={styles.optionsRow}>
                {options.map((opt) => (
                    <TouchableOpacity
                        key={opt.key}
                        style={[
                            styles.optionCard,
                            selectedStyle === opt.key && styles.optionCardSelected,
                        ]}
                        onPress={() => onSelect(opt.key)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedStyle === opt.key && styles.optionTextSelected,
                            ]}
                        >
                            {opt.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default StyleSelector;