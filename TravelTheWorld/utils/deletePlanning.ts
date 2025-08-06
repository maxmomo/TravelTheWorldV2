import { PlanningData } from '@/types/planning.type';
import { deletePlanning } from '@/api/planning';
import { confirmAction } from './confirmAction';

/**
 * Affiche une alerte de confirmation et supprime un planning si confirmé.
 * @param planning Le planning à supprimer
 * @param onSuccess Fonction appelée si la suppression est réussie
 */
export const deletePlanningWithConfirm = (
    planning: PlanningData,
    onSuccess: () => void
) => {
    const start = new Date(planning.startDate!).toLocaleDateString('fr-FR');
    const end = new Date(planning.endDate!).toLocaleDateString('fr-FR');

    confirmAction({
        title: 'Supprimer cet élément ?',
        message: `${planning.title}\nDu ${start} au ${end}`,
        confirmText: 'Supprimer',
        onConfirm: async () => {
            try {
                await deletePlanning(planning.id);
                onSuccess();
            } catch (err) {
                console.error('Erreur lors de la suppression :', err);
            }
        },
    });
};