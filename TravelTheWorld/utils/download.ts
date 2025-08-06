import * as FileSystem from 'expo-file-system';

/**
 * Télécharge un document depuis une URL signée et le stocke localement.
 * @returns Le chemin local du fichier (file://)
 */
export const downloadAndStoreDocument = async (
  remoteUrl: string,
  filename: string
): Promise<string> => {
  console.log(remoteUrl)
  const extension = filename.split('.').pop(); // extrait .pdf, .jpg, etc.
  const cleanName = filename.replace(/[^a-zA-Z0-9-_\.]/g, '_'); // nettoie les caractères spéciaux
  const fileUri = `${FileSystem.documentDirectory}${cleanName}`;

  const downloadRes = await FileSystem.downloadAsync(remoteUrl, fileUri);

  return downloadRes.uri;
};

