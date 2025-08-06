import { TextInputProps } from 'react-native';

export type CustomTextInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
};

export type DateInputProps = {
  label: string;
  value: Date | null;
  onChange?: (date: Date) => void;
  placeholder?: string;
};

export type CountrySelectorProps = {
  selectedCountries: string[]; // codes ISO 3166-1 alpha-2 ex: ['FR', 'AR']
  onChange: (countries: string[]) => void;
};

export interface CurrencySelectorProps {
  selectedCurrency: string;
  onChange: (currencyCode: string) => void;
  hideLabel?: boolean; // ➕ option pour cacher le label
}

export type TripStyle = 'backpack' | 'confort' | 'luxe' | 'van' | '';

export interface StyleSelectorProps {
  selectedStyle: 'backpack' | 'confort' | 'luxe' | 'van' | '';
  onSelect: (style: 'backpack' | 'confort' | 'luxe' | 'van' | '') => void;
}

/**
 * ➤ Propriétés attendues pour le composant PeopleCounter
 */
export interface PeopleCounterProps {
  label: string;                      // Libellé du compteur (ex: "Nombre d'enfants")
  value: number;                      // Valeur actuelle du compteur
  onChange: (value: number) => void;  // Fonction pour modifier la valeur
  icon?: string;                      // Icône optionnelle (pour le style ou accessibilité)
}