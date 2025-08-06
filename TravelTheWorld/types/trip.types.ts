// =====================================
// ========== TYPES - TRIP =============
// =====================================

/* ==================================================
   ============ STRUCTURE DE BASE D’UN VOYAGE =========
   ================================================== */

// ➤ Structure utilisée pour créer ou éditer un voyage
/**
 * `TripData` : Contient les informations complètes d'un voyage.
 * Utilisé dans les étapes de création de voyage pour collecter et afficher les données de voyage.
 */
export type TripData = {
    id: number;                // Ajout de l'ID du voyage, facultatif ici
    title: string;              // Nom du voyage (ex: "Road trip Patagonie")
    startDate: Date | null;     // Date de début
    endDate: Date | null;       // Date de fin
    budget: string;             // Budget estimatif
    adults: number;             // Nombre d'adultes
    children: number;           // Nombre d'enfants
    key: number;                // Clé du voyage
};

/* ==================================================
   ============= PROPS COMMUNES AUX ÉTAPES ===========
   ================================================== */

/**
 * `StepProps` : Propriétés partagées par les composants des étapes du processus de création du voyage.
 * Utilisé dans chaque étape de la création de voyage pour gérer les données et la navigation entre les étapes.
 */
export type StepProps = {
    data: TripData;           // Données du voyage à chaque étape
    onNext: () => void;        // Fonction pour passer à l'étape suivante
    onBack?: () => void;       // Fonction optionnelle pour revenir à l'étape précédente
    onChange: (key: keyof TripData, value: any) => void; // Fonction pour mettre à jour les données du voyage
    loading: boolean;
};

/**
 * `CreateTripResponse` : Structure de réponse de l'API lors de la création du voyage.
 * Utilisé pour renvoyer les informations du voyage créé à l'utilisateur après un appel API.
 */
export interface CreateTripResponse {
    message: string;        // Message de confirmation
    trip: TripData;         // Données du voyage créé
}

export interface GetTripsResponse {
    trips: TripData[];  // Liste des voyages récupérés
}

export interface GetTripResponse {
    trip: TripData;  // Voyage récupéré
}
