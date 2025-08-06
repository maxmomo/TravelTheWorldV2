import { API_URL } from '@/constants/api';
import { LoginPayload, LoginResponse, RegisterPayload, RegisterResponse } from '@/types/auth.types';
import { useTranslation } from 'react-i18next';

// ============================
// ======== REGISTER ==========
// ============================

export const registerUser = async (payload: LoginPayload, t: (key: string) => string): Promise<RegisterResponse> => {

  const response = await fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || t('error.signin.registerError'));
  }

  return data as RegisterResponse;
};

// ============================
// ========== LOGIN ===========
// ============================

export const loginUser = async (payload: LoginPayload, t: (key: string) => string): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();


  if (!response.ok) {
    throw new Error(data.error || t('error.login.connexionError'));
  }

  return data as LoginResponse;
};