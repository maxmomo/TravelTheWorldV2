import React, { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

{/* === COMPOSANTS === */ }
import Header from '@/components/common/Header';
import PrimaryButton from '@/components/common/PrimaryButton';
import DayCard from '@/components/day/DayCard';

{/* === TYPES === */ }
import { PlanningData } from '@/types/planning.type';

{/* === CONTEXTE === */ }
import { useTrip } from '@/context/TripContext';

{/* === STYLES === */ }
import { globalStyles } from '@/styles/common/global.style';
import { METRICS } from '@/constants/metrics';

{/* === UTILS === */ }
import { getAllDaysBetween, toDateOnlyString } from '@/utils/date';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

const iconMap: Record<
  NonNullable<PlanningData['type']>,
  keyof typeof Ionicons.glyphMap
> = {
  hebergement: 'bed-outline',
  transport: 'car-outline', // fallback générique si pas de transportMode
  activite: 'color-palette-outline',
};

const transportIconMap: Record<
  NonNullable<PlanningData['transportMode']>,
  keyof typeof Ionicons.glyphMap
> = {
  avion: 'airplane-outline',
  train: 'train-outline',
  bus: 'bus-outline',
  voiture: 'car-outline',
  taxi: 'car-sport-outline',
  uber: 'navigate-outline',
  ferry: 'boat-outline',
  velo: 'bicycle-outline',
  pied: 'walk-outline',
};

// ===========================================
// ============= DAYS SCREEN =================
// ===========================================

const DaysScreen = () => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  // === 🔗 Navigation ===  
  const router = useRouter();

  // === 🧩 Contexte ===  
  const { trip } = useTrip();
  const { plannings } = useTrip();

  // === 🧠 États ===
  const [loading, setLoading] = useState(true);
  const [allDays, setAllDays] = useState<string[]>([]);

  // ===========================================
  // =============== FONCTIONS =================
  // ===========================================

  // 📅 Fonction pour créer les journées
  const fetchDays = useCallback(async () => {

    // Jours couverts par le voyage
    if (!trip?.startDate || !trip?.endDate) {
      setAllDays([]);
      setLoading(false);
      return;
    }
    const startTrip = new Date(trip.startDate);
    const endTrip = new Date(trip.endDate);

    const tripDays = getAllDaysBetween(startTrip, new Date(endTrip.setDate(endTrip.getDate() + 1)));

    // Jours couverts par les plannings (même hors voyage)
    const planningDays = plannings.flatMap((planning) => {
      if (!planning.startDate || !planning.endDate) return [];
      return getAllDaysBetween(new Date(planning.startDate), new Date(planning.endDate));
    });

    // Fusionner les deux
    const allUniqueDays = Array.from(new Set([...tripDays, ...planningDays])).sort();

    setAllDays(allUniqueDays);
    setLoading(false);
  }, []);

  // ➕ Aller à la création de planning
  const handlePlanningPress = () => {
    if (!trip?.id) return;
    router.push({
      pathname: '/trip/[tripId]/planning/create',
      params: { tripId: trip.id.toString() },
    });
  };

  // 🔁 Rechargement à chaque focus de l'écran
  useFocusEffect(
    useCallback(() => {
      fetchDays();
    }, [fetchDays])
  );

  const getPlanningIcon = (planning: PlanningData): keyof typeof Ionicons.glyphMap => {
    if (planning.type === 'transport') {
      return planning.transportMode && transportIconMap[planning.transportMode]
        ? transportIconMap[planning.transportMode]
        : iconMap.transport;
    }

    return iconMap[planning.type ?? 'hebergement'];
  };

  // ===========================================
  // ================ RENDU ====================
  // ===========================================

  type IconData = {
    name: keyof typeof Ionicons.glyphMap;
    color: 'red' | 'orange' | 'green';
  };

  const renderItem = ({ item: date }: { item: string }) => {
    const d = toDateOnlyString(date);

    const planningsOfDay = plannings.filter((planning) => {
      if (!planning.startDate || !planning.endDate) return false;
      const start = toDateOnlyString(planning.startDate);
      const end = toDateOnlyString(planning.endDate);
      if (planning.type === 'hebergement') {
        return d >= start && d < end;
      }
      return d >= start && d <= end;
    });

    const icons: IconData[] = [];

    // === Hébergement ===
    const accomodations = planningsOfDay.filter(p => p.type === 'hebergement');
    if (accomodations.length === 0) {
      icons.push({ name: iconMap.hebergement, color: 'red' });
    } else if (accomodations.some(a => a.booked)) {
      icons.push({ name: iconMap.hebergement, color: 'green' });
    } else {
      icons.push({ name: iconMap.hebergement, color: 'orange' });
    }

    // === Transport (par mode) ===
    const transports = planningsOfDay.filter(p => p.type === 'transport');

    const transportModes = Array.from(
      new Set(transports.map(p => p.transportMode).filter(Boolean))
    ) as NonNullable<PlanningData['transportMode']>[];

    transportModes.forEach(mode => {
      const color = transports.some(t => t.transportMode === mode && t.booked)
        ? 'green'
        : 'orange';

      const icon = transportIconMap[mode] ?? iconMap.transport;
      icons.push({ name: icon, color });
    });

    // === Activité ===
    const activities = planningsOfDay.filter(p => p.type === 'activite');
    if (activities.length > 0) {
      icons.push({ name: iconMap.activite, color: 'green' });
    }

    return (
      <DayCard
        date={date}
        icons={icons}
        onPress={() => {
          router.push({
            pathname: '/trip/[tripId]/day/[date]/accomodation',
            params: {
              tripId: trip?.id.toString(),
              date: date.toString(),
            },
          });
        }}
      />
    );
  };

  // ===========================================
  // ================= AFFICHAGE ===============
  // ===========================================

  if (loading) {
    return (
      <View style={globalStyles.loading}>
        <Text>{t('global.loading')}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        onBackPress={() =>
          router.push({
            pathname: '/trips'
          })
        }
      />
      <View style={globalStyles.container}>

        <PrimaryButton
          title={t('global.plan')}
          onPress={handlePlanningPress}
        />

        <FlatList
          data={allDays}
          keyExtractor={(date) => date}
          renderItem={renderItem}
          style={{ 'marginTop': METRICS.spacing }}
        />
      </View>
    </View>
  );
};

export default DaysScreen;