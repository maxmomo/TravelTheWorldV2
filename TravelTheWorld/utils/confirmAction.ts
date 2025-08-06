import { Alert } from 'react-native';

/**
 * Affiche une alerte de confirmation avec deux boutons.
 * @param options Objet contenant le titre, le message, les libellés des boutons et l'action à exécuter si confirmé.
 */
export const confirmAction = ({
    title,
    message,
    confirmText = 'Confirmer',
    cancelText = 'Annuler',
    onConfirm,
}: {
    title: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
}) => {
    Alert.alert(title, message, [
        { text: cancelText, style: 'cancel' },
        { text: confirmText, style: 'destructive', onPress: onConfirm },
    ]);
};