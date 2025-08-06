import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

export const settingsStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  codeText: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
    color: COLORS.primary,
  },
  valueText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.text,
  },
  roleTag: {
    fontSize: 12,
    backgroundColor: COLORS.primary + '20',
    color: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
