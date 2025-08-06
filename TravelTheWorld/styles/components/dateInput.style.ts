import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { StyleSheet } from 'react-native';

export const dateInputStyles = StyleSheet.create({
  container: {
    marginBottom: METRICS.spacing * 2
  },
  label: {
    fontSize: METRICS.font.medium,
    color: COLORS.black2,
    marginBottom: METRICS.spacing * 0.5,
  },
  button: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: METRICS.radius,
    padding: METRICS.padding,
    fontSize: METRICS.font.medium,
    backgroundColor: COLORS.white,
    color: COLORS.black3
  },
  text: {
    fontSize: METRICS.font.medium,
    color: COLORS.black3,
  },
});