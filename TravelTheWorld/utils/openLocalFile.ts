import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export const openLocalFile = async (uri: string) => {
  const fileInfo = await FileSystem.getInfoAsync(uri);

  if (!fileInfo.exists) {
    throw new Error("Fichier introuvable.");
  }

  const isAvailable = await Sharing.isAvailableAsync();
  if (!isAvailable) {
    throw new Error("Aucune application pour ouvrir ce fichier.");
  }

  await Sharing.shareAsync(uri);
};
