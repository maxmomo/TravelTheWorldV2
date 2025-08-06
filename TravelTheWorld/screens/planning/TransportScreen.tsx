import { useRouter } from 'expo-router';
import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

import Header from '@/components/common/Header';
import PlanningCard from '@/components/planning/PlanningCard';
import PrimaryButton from '@/components/common/PrimaryButton';

import { getPlannings, updatePlanning } from '@/api/planning';
import { PlanningData } from '@/types/planning.type';
import { deletePlanningWithConfirm } from '@/utils/deletePlanning';
import { savePlanningToEdit } from '@/utils/storage/planningEdit';

import { METRICS } from '@/constants/metrics';
import { useTrip } from '@/context/TripContext';
import { useTripDay } from '@/context/TripDayContext';
import { confirmAction } from '@/utils/confirmAction';
import { Vibration } from 'react-native';

const toDateOnlyString = (date: Date | string) =>
  new Date(date).toISOString().split('T')[0];

const formatToFrenchDate = (date: string | Date) =>
  new Date(date).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

const TransportScreen = () => {

  const { tripId, date } = useTripDay()!;
  
  const [accomodation, setAccomodation] = useState<PlanningData[]>([]);
  const [refreshKey, setRefreshKey] = useState(0);

  const { plannings, setPlannings } = useTrip();
  const router = useRouter();

  const refresh = () => setRefreshKey((prev) => prev + 1);

  const loadPlannings = async () => {
    if (!tripId || !date) return;

    const all = await getPlannings(Number(tripId));

    const targetDate = toDateOnlyString(date as string);

    const filtered = all.filter((planning) => {
      if (planning.type !== 'transport') return false;
      if (!planning.startDate || !planning.endDate) return false;

      const start = toDateOnlyString(planning.startDate);
      const end = toDateOnlyString(planning.endDate);
      
      return targetDate >= start && targetDate <= end;
    });

    const sorted = filtered.sort((a, b) =>
      a.booked === b.booked ? 0 : a.booked ? -1 : 1
    );

    setAccomodation(sorted);
  };

  useEffect(() => {
    loadPlannings();
  }, [tripId, date, refreshKey]);

  const handleAdd = () => {
    if (!tripId || !date) return;
    const start = toDateOnlyString(date as string);
    const end = toDateOnlyString(
      new Date(new Date(date as string).getTime() + 86400000)
    );

    router.push({
      pathname: '/trip/[tripId]/planning/create',
      params: {
        tripId: tripId.toString(),
        type: 'transport',
        startDate: start,
        endDate: end,
      },
    });
  };

  const handleConfirmBooking = (planning: PlanningData) => {
    confirmAction({
      title: 'Confirmer la réservation ?',
      message: `${planning.title}`,
      confirmText: 'Confirmer',
      onConfirm: async () => {
        try {
          const updatedPlanning = await updatePlanning(
            { ...planning, booked: !planning.booked },
            planning.id
          );

          setPlannings(
            plannings.map((p) =>
              p.id === updatedPlanning.id ? updatedPlanning : p
            )
          );

          Vibration.vibrate(100);

          refresh();
        } catch (error) {
          console.error('❌ Erreur lors de la mise à jour :', error);
        }
      },
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        onBackPress={() =>
          router.push({
            pathname: '/trip/[tripId]/overview/days',
            params: { tripId: String(tripId) },
          })
        }
      />

      {date && (
        <View style={{ paddingHorizontal: METRICS.padding, paddingTop: 12, paddingBottom: 6 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Transport du {formatToFrenchDate(date as string)}
          </Text>
        </View>
      )}

      <View style={{ flex: 1 }}>
        {accomodation.length === 0 ? (
          <View style={{ padding: METRICS.padding }}>
            <Text>Aucun transport ce jour-là</Text>
          </View>
        ) : (
          <View style={{ flex: 4 }}>
            <FlatList
              key={refreshKey}
              data={accomodation}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: METRICS.padding }}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: METRICS.screenWidth - 2 * METRICS.padding,
                    marginRight: 2 * METRICS.padding,
                    justifyContent: 'center',
                  }}
                >
                  <PlanningCard
                    planning={item}
                    onEdit={() => {
                      savePlanningToEdit(item);
                      router.push({
                        pathname: '/trip/[tripId]/planning/create',
                        params: {
                          tripId: tripId.toString(),
                          type: 'transport',
                          directStep: '2',
                          mode: 'edit',
                        },
                      });
                    }}
                    onConfirmBooking={() => handleConfirmBooking(item)} // 🧠 modifié
                    onDelete={() => deletePlanningWithConfirm(item, refresh)}
                  />
                </View>
              )}
            />
          </View>
        )}

        <View style={{ flex: 1, paddingHorizontal: METRICS.padding, justifyContent: 'center', alignItems: 'center' }}>
          <PrimaryButton title="Ajouter un transport" onPress={handleAdd} />
        </View>
      </View>
    </View>
  );
};

export default TransportScreen;
