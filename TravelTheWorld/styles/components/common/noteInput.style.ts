import { StyleSheet } from 'react-native';
import { METRICS } from '@/constants/metrics';
import { COLORS } from '@/constants/Colors';

export const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: METRICS.spacing * 2
    },
    label: {
        fontSize: METRICS.font.medium,
        color: COLORS.black2,
        marginBottom: METRICS.spacing * 0.5,
    },
    noteInput: {
        height: METRICS.screenHeight * 0.3,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
        marginTop: 8,
    },
});