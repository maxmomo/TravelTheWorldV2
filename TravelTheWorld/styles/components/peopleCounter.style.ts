import { StyleSheet } from 'react-native';
import { METRICS } from '@/constants/metrics';
import { COLORS } from '@/constants/Colors';

export const peopleCounterStyles = StyleSheet.create({
  container: {
    marginBottom: METRICS.spacing * 2,
  },
  label: {
    fontSize: METRICS.font.medium,
    color: COLORS.black2,
    marginBottom: METRICS.spacing * 0.5,
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: METRICS.spacing,
  },
  button: {
    width: METRICS.font.large * 1.5,
    height: METRICS.font.large * 1.5,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: METRICS.font.large,
    color: COLORS.white,
    fontWeight: 'bold',
  },
  value: {
    fontSize: METRICS.font.large,
    width: METRICS.font.large,
    textAlign: 'center',
    color: COLORS.black,
  },
});