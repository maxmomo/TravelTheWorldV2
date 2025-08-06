import { StyleSheet } from 'react-native';
import { METRICS } from '@/constants/metrics';
import { COLORS } from '@/constants/Colors';

export const primaryButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: METRICS.spacing,
    borderRadius: METRICS.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: METRICS.spacing,
  },
  text: {
    color: COLORS.white,
    fontSize: METRICS.font.medium,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.3,
  },
  smallButton: {
    paddingVertical: METRICS.spacing * 0.7,
  },
  smallText: {
    fontSize: METRICS.font.small,
  },
  halfButton: {
    justifyContent: 'center',
    gap: 100,
    flex: 1,
    flexDirection: 'row',
  }
});
