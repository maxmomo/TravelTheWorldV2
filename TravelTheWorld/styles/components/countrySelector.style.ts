import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { StyleSheet } from 'react-native';

export const countrySelectorStyles = StyleSheet.create({
    container: {
        marginBottom: METRICS.spacing * 2
    },
    labelRow: {
        marginBottom: METRICS.spacing
    },
    label: {
        fontSize: METRICS.font.medium,
        color: COLORS.black2,
        marginBottom: METRICS.spacing * 0.5,
    },
    selectButton: {
        paddingVertical: METRICS.padding * 0.5,
        paddingHorizontal: METRICS.padding,
        backgroundColor: COLORS.primary,
        borderRadius: METRICS.radius,
        alignItems: 'center',
        margin: METRICS.padding
    },
    selectButtonText: {
        color: COLORS.white
    },
    selectedWrapper: {
        maxHeight: 1000
    },
    selectedScroll: {
        height: METRICS.screenHeight * 0.34,
    },
    selectedContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: METRICS.spacing * 0.5,
        paddingBottom: METRICS.spacing * 5,
    },
    flagItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: METRICS.radius,
        paddingHorizontal: METRICS.padding * 0.64
    },
    flag: { 
        fontSize: METRICS.font.title, 
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
    countryOption: {
        paddingVertical: METRICS.padding * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: METRICS.padding * 0.5,
    }
});