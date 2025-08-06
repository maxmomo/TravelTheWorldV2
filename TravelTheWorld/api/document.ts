import { API_URL } from '@/constants/api';
import { PlanningDocument } from '@/types/document.type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';

// ===========================
// ===== UPLOAD DOCUMENT =====
// ===========================

export const uploadDocument = async (
  planningId: number,
  userId: number,
  fileUri: string,
  fileName: string,
  mimeType: string
) => {
  const token = await AsyncStorage.getItem('userToken');
  if (!token) {
    throw new Error('Token manquant');
  }

  const base64File = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });

  const response = await fetch(`${API_URL}/api/documents/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({
      planningId,
      userId,
      filename: fileName,
      mimeType,
      base64File,
    }),
  });
  
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de l’upload du document.');
  }

  return data;
};

// ================================
// ======= GET DOWNLOAD URL =======
// ================================

export const getDocumentDownloadUrl = async (documentId: number): Promise<string> => {
  const token = await AsyncStorage.getItem('userToken');
  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/documents/${documentId}/download`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la récupération du document.');
  }

  return data.url as string;
};

// ==============================
// ======= DELETE DOCUMENT ======
// ==============================

export const deleteDocument = async (documentId: number) => {
  const token = await AsyncStorage.getItem('userToken');
  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/documents/${documentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la suppression du document.');
  }

  return data;
};

// ================================
// ==== GET DOCUMENTS BY PLANNING ===
// ================================

export const getDocumentsByPlanning = async (planningId: number): Promise<PlanningDocument[]> => {
  const token = await AsyncStorage.getItem('userToken');
  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/documents/${planningId}/document`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la récupération des documents.');
  }

  return data.documents; // ✅ TypeScript sait que chaque document contient .url
};
