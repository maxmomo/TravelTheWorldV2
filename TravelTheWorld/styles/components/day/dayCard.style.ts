import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

export const dayCardStyles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: METRICS.radius,
    padding: METRICS.padding,
    margin: METRICS.spacing * 0.5,
    flexDirection: 'row',
    borderColor: COLORS.primary,
    borderWidth: 2
  },
  date: {
    flex: 1,
    fontSize: METRICS.font.medium,
    fontWeight: 'bold',
    color: COLORS.black
  },
  iconRow: {
    flexDirection: 'row',
  }
});
