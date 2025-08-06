import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { StyleSheet } from 'react-native';

export const textStyles = StyleSheet.create({
    title: {
        fontSize: METRICS.font.title,
        fontWeight: '700',
        color: COLORS.black,
        textAlign: 'center',
        marginBottom: METRICS.spacing
    },
    subtitle: {
        fontSize: METRICS.font.subtitle,
        fontWeight: '600',
        color: COLORS.black2,
        textAlign: 'center',
        marginBottom: METRICS.spacing * 0.8
    },
    subtitle2: {
        fontSize: METRICS.font.medium,
        fontWeight: '600',
        color: COLORS.black3,
        textAlign: 'center',
        marginBottom: METRICS.spacing
    },
    error: {
        fontSize: METRICS.font.error,
        color: COLORS.error,
        textAlign: 'center'
    },
    paragraph: {
        textAlign: 'center',
        fontSize: METRICS.font.medium,
        color: COLORS.black3,
        marginTop: 8,
    },
});
