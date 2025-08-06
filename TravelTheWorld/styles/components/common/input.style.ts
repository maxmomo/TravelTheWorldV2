import { StyleSheet } from 'react-native';
import { METRICS } from '@/constants/metrics';
import { COLORS } from '@/constants/Colors';

export const inputStyles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white2,
    paddingVertical: METRICS.spacing * 0.75,
    paddingHorizontal: METRICS.padding * 0.8,
    borderRadius: METRICS.radius,
    fontSize: METRICS.font.regular,
    marginBottom: METRICS.spacing * 0.8,
  }
});