import { StyleSheet } from 'react-native';
import { METRICS } from '@/constants/metrics';
import { COLORS } from '@/constants/Colors';

export const linkStyles = StyleSheet.create({
  linkContainer: {
    marginTop: METRICS.spacing,
    alignItems: 'center'
  },
  linkText: {
    color: COLORS.primary,
    fontSize: METRICS.font.small,
    fontWeight: '700'
  },
});