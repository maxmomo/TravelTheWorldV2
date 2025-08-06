import { Slot, useLocalSearchParams } from 'expo-router';
import { TripContext } from '@/context/TripContext';
import { useEffect, useState } from 'react';
import { getTrip } from '@/api/trip';
import { getPlannings } from '@/api/planning';
import { TripData } from '@/types/trip.types';
import { PlanningData } from '@/types/planning.type';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '@/constants/Colors';

export default function TripLayout() {
  const { tripId } = useLocalSearchParams();
  const [trip, setTrip] = useState<TripData | null>(null);
  const [plannings, setPlannings] = useState<PlanningData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTripAndPlannings = async () => {
      try {
        const fetchedTrip = await getTrip(Number(tripId));
        const fetchedPlannings = await getPlannings(Number(tripId));
        setTrip(fetchedTrip.trip);
        setPlannings(fetchedPlannings);
      } catch (error) {
        console.error('❌ Erreur lors du chargement du voyage et des plannings :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTripAndPlannings();
  }, [tripId]);

  if (loading || !trip) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <TripContext.Provider value={{ trip, setTrip, plannings, setPlannings }}>
      <Slot />
    </TripContext.Provider>
  );
}
