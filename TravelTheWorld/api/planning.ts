import { API_URL } from '@/constants/api';
import { PlanningData, CreatePlanningResponse, GetPlanningsResponse, UpdatePlanningResponse } from '@/types/planning.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ============================
// ===== CREATE PLANNING ======
// ============================

export const createPlanning = async (payload: PlanningData, tripId: number | number): Promise<CreatePlanningResponse> => {

  // Récupère le token d'authentification
  const token = await AsyncStorage.getItem('userToken');

  if (!token) {
    throw new Error('Token manquant');
  }

  // Nettoyage inline des champs sensibles
  const safePayload = {
    type: payload.type ?? '',
    title: payload.title ?? '',
    location: payload.location ?? '',
    startDate: payload.startDate ?? null,
    endDate: payload.endDate ?? null,
    link: payload.link ?? '',
    price: payload.price ?? null,
    isBooked: payload.booked ?? false,
    note: payload.note ?? '',
    transportMode: payload.transportMode ?? null,
    departureCity: payload.departureCity ?? null,
    arrivalCity: payload.arrivalCity ?? null
  };

  const response = await fetch(`${API_URL}/api/trips/${tripId}/planning`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(safePayload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la création du voyage.');
  }

  return data as CreatePlanningResponse;
};

// =============================
// ====== GET PLANNINGS ========
// =============================

export const getPlannings = async (tripId: number): Promise<GetPlanningsResponse> => {

  // Récupère le token d'authentification
  const token = await AsyncStorage.getItem('userToken');

  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/trips/${tripId}/planning`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la récupération des plannings.');
  }

  return data as GetPlanningsResponse;
};

// ===============================
// ====== DELETE PLANNING ========
// ===============================

export const deletePlanning = async (planningId: number) => {

  // Récupère le token d'authentification
  const token = await AsyncStorage.getItem('userToken');

  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/plannings/${planningId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la suppression du planning.');
  }

  return data as GetPlanningsResponse;
};

// ===============================
// ====== UPDATE PLANNING ========
// ===============================

export const updatePlanning = async (payload: PlanningData, planningId: number): Promise<UpdatePlanningResponse>  => {

  // Récupère le token d'authentification
  const token = await AsyncStorage.getItem('userToken');

  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/plannings/${planningId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la suppression du planning.');
  }

  return data as UpdatePlanningResponse;
};