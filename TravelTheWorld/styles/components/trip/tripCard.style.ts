import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { StyleSheet } from 'react-native';

export const tripCardStyles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: METRICS.radius,
    padding: METRICS.padding,
    marginBottom: METRICS.spacing,
    borderColor: COLORS.primary,
    borderWidth: 2
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: METRICS.font.large,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  cardDates: {
    fontSize: METRICS.font.regular,
    color: COLORS.black2,
    marginTop: METRICS.spacing
  },
  flagContainer: {
    marginTop: METRICS.spacing
  },
  flagRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flagText: {
    fontSize: METRICS.font.title,
    marginRight: METRICS.spacing,
    marginTop: METRICS.spacing
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    padding: 4,
  },
});