import { TFunction } from 'i18next';
import { isValidEmail } from './isValidEmail';

export const validateSignupInputs = (
  username: string,
  email: string,
  password: string,
  t: TFunction
): string | null => {
  if (!username || !email || !password) return t('error.signin.emptyFields');
  if (!isValidEmail(email)) return t('error.email.invalid');
  return null;
};

export const validateLoginInputs = (
  email: string,
  password: string,
  t: TFunction
): string | null => {
  if (!email || !password) return t('error.login.emptyFields');
  if (!isValidEmail(email)) return t('error.email.invalid');
  return null;
};