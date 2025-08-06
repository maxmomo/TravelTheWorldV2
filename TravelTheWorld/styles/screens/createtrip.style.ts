import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

export const createtripStyles = StyleSheet.create({
  screen: {
    flex: 1,    
  },
  content: {
    flexGrow: 1
  },
  stepTitle: {
    fontSize: METRICS.font.title,
    fontWeight: 'bold',
    marginBottom: METRICS.spacing * 0.2,
  },
  stepDescription: {
    fontSize: METRICS.font.medium,
    color: COLORS.black3,
    marginBottom: METRICS.spacing,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: METRICS.spacing,
    position: 'absolute',
    bottom: 0,  
    left: METRICS.padding,
    right: METRICS.padding
  } ,
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: METRICS.spacing,
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: METRICS.font.medium

  },
});
