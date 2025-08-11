// i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import fr from './fr.json';
import en from './en.json';

// Détection robuste (pas de split sur undefined)
const detected = getLocales?.()[0]?.languageCode ?? 'fr';

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: detected,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
    // compatibilityJSON: 'v4', // ← optionnel, tu peux laisser commenté
    returnNull: false,
  });

export default i18n;
