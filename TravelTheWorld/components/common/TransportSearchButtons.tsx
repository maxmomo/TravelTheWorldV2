import React from 'react';
import { View, TouchableOpacity, Text, Linking, Alert, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { IATA_CODES } from '@/data/iataCodes'; // 🛫 Table des codes IATA

type Props = {
  departureCity?: string | null;
  arrivalCity?: string | null;
  startDate?: Date | null;
  transportMode?: string | null;
};

const KAYAK_COLOR = '#ff6200';

const formatDate = (date: Date | string) => {
  if (!date) return '';
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
};

const getIataCode = (city: string) => {
  const cleanCity = city.split(',')[0].trim(); // enlève les ", FR"
  return IATA_CODES[cleanCity] ?? cleanCity;   // fallback : si pas trouvé ➔ ville brute
};

const TransportSearchButtons = ({ departureCity, arrivalCity, startDate, transportMode }: Props) => {
  const buildKayakUrl = (
    departureCity: string,
    arrivalCity: string,
    startDate: Date | string,
    adults: number = 1
  ) => {
    const dep = getIataCode(departureCity);
    const arr = getIataCode(arrivalCity);
    const date = formatDate(startDate);
    return `https://www.kayak.fr/flights/${dep}-${arr}/${date}/${adults}adults`;
  };

  const handleOpen = () => {
    if (!departureCity || !arrivalCity || !startDate) {
      Alert.alert('Champs manquants', 'Merci de remplir le départ, l’arrivée et la date.');
      return;
    }

    const url = buildKayakUrl(departureCity, arrivalCity, startDate, 2);

    Linking.openURL(url);
  };

  if (!transportMode || transportMode !== 'avion') return null; // ➡️ Affiché uniquement pour avion

  return (
    <View style={styles.container}>
      <Text style={styles.label}>🔍 Recherche ton vol :</Text>

      <TouchableOpacity
        style={[styles.button, { borderColor: KAYAK_COLOR }]}
        onPress={handleOpen}
      >
        <FontAwesome5 name="plane" size={20} color={KAYAK_COLOR} style={styles.icon} />
        <Text style={[styles.text, { color: KAYAK_COLOR }]}>Kayak</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: METRICS.font.medium,
    color: COLORS.black2,
    marginBottom: METRICS.spacing,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: METRICS.radius,
    padding: METRICS.padding * 0.8,
    marginBottom: METRICS.spacing,
  },
  icon: {
    marginRight: METRICS.spacing * 0.55,
  },
  text: {
    fontWeight: 'bold',
    fontSize: METRICS.font.medium,
  },
});

export default TransportSearchButtons;
