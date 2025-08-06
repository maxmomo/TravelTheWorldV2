// ==========================
// ====== TYPES - AUTH ======
// ==========================

// ➤ Utilisateur de base (utilisé dans tout le contexte)
export interface User {
  id: number;
  username: string;
  email: string;
}

// ➤ Structure du contexte d'authentification
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (userData: User) => Promise<void>;
  logout: () => Promise<void>;
}

// ==========================
// ==== Auth Payloads =======
// ==========================

// ➤ Données envoyées pour l’inscription
export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

// ➤ Données envoyées pour la connexion
export interface LoginPayload {
  email: string;
  password: string;
}

// ==========================
// ==== Auth Responses ======
// ==========================

// ➤ Réponse renvoyée après une inscription réussie
export interface RegisterResponse {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  token: string;
}

// ➤ Réponse renvoyée après une connexion réussie
export interface LoginResponse {
  message: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
  token: string;
}