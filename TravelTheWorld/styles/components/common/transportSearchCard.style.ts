import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

export const transportSearchCardStyles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    backgroundColor: COLORS.white2,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerText: {
    fontSize: METRICS.font.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: METRICS.spacing,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderRadius: METRICS.radius,
    padding: METRICS.padding,
    marginBottom: METRICS.spacing,
  },
  icon: {
    marginRight: METRICS.spacing,
  },
  buttonText: {
    fontSize: METRICS.font.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});