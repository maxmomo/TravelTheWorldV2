import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

export const currencySelectorStyles = StyleSheet.create({
  container: {
    marginBottom: METRICS.spacing * 2
  },
  label: {
    fontSize: METRICS.font.medium,
    color: COLORS.black2,
    marginBottom: METRICS.spacing * 0.5,
  },
  selector: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: METRICS.radius,
    padding: METRICS.padding,
    fontSize: METRICS.font.medium,
    backgroundColor: COLORS.white,
    color: COLORS.black3
  },
  selectorText: {
    fontSize: METRICS.font.medium,
    color: COLORS.black3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: METRICS.radius,
    padding: METRICS.padding,
    width: METRICS.screenWidth * 0.8,
    maxHeight: METRICS.screenHeight * 0.7,
  },
  modalTitle: {
    fontSize: METRICS.font.large,
    fontWeight: 'bold',
    marginBottom: METRICS.spacing,
    textAlign: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    borderRadius: METRICS.radius,
    paddingHorizontal: METRICS.padding,
    paddingVertical: METRICS.padding * 0.5,
    marginBottom: METRICS.spacing,
    fontSize: METRICS.font.medium,
    color: COLORS.black2,
  },
  option: {
    paddingVertical: METRICS.padding * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: METRICS.padding,
  }
});