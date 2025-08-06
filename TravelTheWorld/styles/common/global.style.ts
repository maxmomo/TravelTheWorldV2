import { StyleSheet } from 'react-native';
import { METRICS } from '@/constants/metrics';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: METRICS.padding
    },
    listContainer: {
        paddingBottom: METRICS.padding
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '5%'
    },
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: METRICS.padding,
        paddingBottom: METRICS.padding * 4,
    },
});