import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { StyleSheet } from 'react-native';

export const customTextInputStyles = StyleSheet.create({
  container: {
    marginBottom: METRICS.spacing * 2
  },
  label: {
    fontSize: METRICS.font.medium,
    color: COLORS.black2,
    marginBottom: METRICS.spacing * 0.5,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: METRICS.radius,
    padding: METRICS.padding,
    fontSize: METRICS.font.medium,
    backgroundColor: COLORS.white,
    color: COLORS.black3
  },
  suggestion: {
    paddingVertical: METRICS.spacing,
    paddingHorizontal: METRICS.spacing * 1.5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.inputBorder
  },
});