import { COLORS } from "@/constants/Colors";
import { METRICS } from "@/constants/metrics";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      padding: METRICS.padding,
      backgroundColor: COLORS.white,
      borderRadius: METRICS.radius,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    headerText: {
      fontSize: METRICS.font.regular,
      fontWeight: '600',
      color: COLORS.primary,
      marginBottom: METRICS.spacing * 0.5,
    },
    titleText: {
      fontSize: METRICS.font.medium,
      fontWeight: '600',
      marginBottom: METRICS.spacing * 0.4,
    },
    dateText: {
      color: COLORS.black3,
      fontSize: METRICS.font.small,
    },
  });