import { API_URL } from '@/constants/api';
import { TripData, CreateTripResponse, GetTripsResponse, GetTripResponse } from '@/types/trip.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ============================
// ======= CREATE TRIP ========
// ============================

export const createTrip = async (payload: TripData): Promise<CreateTripResponse> => {

  // Récupère le token d'authentification
  const token = await AsyncStorage.getItem('userToken');

  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/trips`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la création du voyage.');
  }

  return data as CreateTripResponse;
};

// =============================
// ======== GET TRIPS ==========
// =============================

export const getTrips = async (): Promise<GetTripsResponse> => {

  // Récupère le token d'authentification
  const token = await AsyncStorage.getItem('userToken');

  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/trips/my-trips`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la récupération des voyages.');
  }

  return data as GetTripsResponse;
};

// ============================
// ======== GET TRIP ==========
// ============================

export const getTrip = async (tripId: number): Promise<GetTripResponse> => {

  // Récupère le token d'authentification
  const token = await AsyncStorage.getItem('userToken');

  if (!token) {
    throw new Error('Token manquant');
  }

  const response = await fetch(`${API_URL}/api/trips/${tripId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Erreur lors de la récupération du voyage.');
  }

  return data as GetTripResponse;
};