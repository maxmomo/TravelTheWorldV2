import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: METRICS.radius,
    padding: METRICS.padding,
    marginVertical: METRICS.spacing
  },
  cardTitle: {
    fontSize: METRICS.font.large,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: METRICS.spacing
  },
  cardElement: {
    fontSize: METRICS.font.regular,
    color: COLORS.black,
    marginBottom: METRICS.spacing * 0.5
  },
  cardLinks: {
    fontSize: METRICS.font.regular,
    color: COLORS.link,
    marginBottom: METRICS.spacing * 0.5
  },
  buttonBase: {
    paddingVertical: METRICS.padding * 0.5,
    paddingHorizontal: METRICS.padding * 0.5,
    borderRadius: METRICS.radius,
    alignSelf: 'center',
    marginVertical: METRICS.spacing * 0.5
  },
  buttonEdit: {
    backgroundColor: COLORS.white2,
  },
  buttonEditText: {
    color: COLORS.black,
  },
  buttonConfirm: {
    backgroundColor: COLORS.green,
  },
  buttonConfirmText: {
    color: COLORS.white
  },
  buttonCancel: {
    backgroundColor: COLORS.orange,
  },
  buttonCancelText: {
    color: COLORS.white,
  },
});