/**
 * Vérifie si une adresse email a un format valide.
 * @param email L’email à vérifier
 * @returns true si l’email est valide, sinon false
 */
export const isValidEmail = (email: string): boolean => {
  return /^\S+@\S+\.\S+$/.test(email);
};
