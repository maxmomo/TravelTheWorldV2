import { StyleSheet } from 'react-native';
import { METRICS } from '@/constants/metrics';
import { COLORS } from '@/constants/Colors';

export const authWrapperStyles = StyleSheet.create({
  card: {
    width: METRICS.screenWidth * 0.9,
    paddingVertical: METRICS.spacing * 2,
    paddingHorizontal: METRICS.padding,
    backgroundColor: COLORS.white,
    borderRadius: METRICS.radius,
    shadowColor: COLORS.black,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: METRICS.screenWidth * 0.8,
    height: METRICS.screenHeight * 0.2,
    alignSelf: 'center',
    marginVertical: METRICS.screenWidth * 0.1
  },
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  }
});