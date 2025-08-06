import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

type Props = {
  label: string;
  iconName: keyof typeof Ionicons.glyphMap; // sécurise avec les icônes Ionicons
  selected: boolean;
  onPress: () => void;
};

const PlanningTypeCard = ({ label, iconName, selected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { 
          backgroundColor: selected ? COLORS.light_primary : COLORS.white,
          borderColor: selected ? COLORS.primary : COLORS.black3,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.icon}>
        <Ionicons name={iconName} size={24} color={selected  ? COLORS.primary : COLORS.black3} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: METRICS.spacing,
    borderRadius: METRICS.radius,
    borderWidth: 2,
    marginBottom: METRICS.spacing,
  },
  icon: {
    marginRight: METRICS.spacing,
  },
  label: {
    fontSize: METRICS.font.medium,
    fontWeight: '600',
  },
});

export default PlanningTypeCard;