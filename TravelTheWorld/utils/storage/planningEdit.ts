import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlanningData } from '@/types/planning.type';

const STORAGE_KEY = 'planning_to_edit';

/**
 * Sauvegarde temporaire du planning à éditer.
 */
export const savePlanningToEdit = async (planning: PlanningData) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(planning));
};

/**
 * Récupération du planning à éditer.
 */
export const getPlanningToEdit = async (): Promise<PlanningData | null> => {
  const json = await AsyncStorage.getItem(STORAGE_KEY);
  return json ? JSON.parse(json) : null;
};

/**
 * Suppression de la donnée une fois utilisée.
 */
export const clearPlanningToEdit = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
};