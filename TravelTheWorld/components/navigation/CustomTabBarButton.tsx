// components/navigation/CustomTabBarButton.tsx

import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/Colors';

type Props = {
  label: string;
  iconName: string;
  onPress: () => void;
  isFocused: boolean;
  color: string;
  size: number;
};

const CustomTabBarButton = ({ label, iconName, onPress, isFocused, color, size }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.container}>
      <Ionicons
        name={iconName as any}
        size={22}
        color={isFocused ? COLORS.airbnbRed : COLORS.black3}
      />
      <Text style={[styles.label, isFocused && styles.labelFocused]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  label: {
    fontSize: 11,
    color: COLORS.black3,
    marginTop: 2,
  },
  labelFocused: {
    color: COLORS.airbnbRed,
    fontWeight: '600',
  },
});

export default CustomTabBarButton;
