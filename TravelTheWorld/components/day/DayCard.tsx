import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { METRICS } from '@/constants/metrics';
import { dayCardStyles } from '@/styles/components/day/dayCard.style';
import { formatDate } from '@/utils/date';

interface IconData {
  name: keyof typeof Ionicons.glyphMap;
  color: 'red' | 'orange' | 'green';
}

interface DayCardProps {
  date: string;
  icons: IconData[];
  onPress?: () => void;
}

const DayCard = ({ date, icons, onPress }: DayCardProps) => {
  return (
    <TouchableOpacity style={dayCardStyles.card} onPress={onPress}>
      <Text style={dayCardStyles.date}>{formatDate(date)}</Text>
      <View style={dayCardStyles.iconRow}>
        {icons.map((icon, index) => (
          <Ionicons
            key={index}
            name={icon.name}
            size={METRICS.font.large}
            color={icon.color}
            style={{ marginRight: index !== icons.length - 1 ? 12 : 0 }}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default DayCard;
