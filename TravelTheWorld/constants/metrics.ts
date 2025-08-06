// constants/metrics.ts
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const METRICS = {
  screenWidth: width,
  screenHeight: height,
  padding: width * 0.05,
  spacing: height * 0.02,
  radius: width * 0.05,
  font: {
    error: width * 0.035,
    small: width * 0.035,
    regular: width * 0.04,
    medium: width * 0.045,
    large: width * 0.06,
    subtitle: width * 0.07,
    title: width * 0.09,
  },
};