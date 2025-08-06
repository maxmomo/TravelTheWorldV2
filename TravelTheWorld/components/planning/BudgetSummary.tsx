import { View, Text } from 'react-native';
import { PlanningData } from '@/types/planning.type';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

type Props = {
  plannings: PlanningData[];
};

const BudgetSummary = ({ plannings }: Props) => {
  const bookedItems = plannings.filter((p) => p.booked);
  const notBookedItems = plannings.filter((p) => !p.booked);

  const getNightCount = (start: Date, end: Date): number => {
    const diff = new Date(end).getTime() - new Date(start).getTime();
    return Math.round(diff / (1000 * 60 * 60 * 24));
  };

  const totalBookedPerNight = bookedItems.reduce((acc, p) => {
    if (!p.startDate || !p.endDate || !p.price) return acc;
    const nights = getNightCount(new Date(p.startDate), new Date(p.endDate));
    return acc + (nights > 0 ? p.price / nights : 0);
  }, 0);

  const notBookedPricesPerNight = notBookedItems
    .map((p) => {
      if (!p.startDate || !p.endDate || !p.price) return null;
      const nights = getNightCount(new Date(p.startDate), new Date(p.endDate));
      return nights > 0 ? p.price / nights : null;
    })
    .filter((val): val is number => val !== null);

  const minToBook = notBookedPricesPerNight.length > 0 ? Math.min(...notBookedPricesPerNight) : 0;
  const maxToBook = notBookedPricesPerNight.length > 0 ? Math.max(...notBookedPricesPerNight) : 0;

  const hasNoBooking = bookedItems.length === 0 && notBookedItems.length > 0;

  return (
    <View
      style={{
        backgroundColor: '#f8f8f8',
        padding: METRICS.padding * 0.5,
        borderRadius: 10,
        borderWidth: 1,
      }}
    >
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>Résumé du budget</Text>

      <Text style={{ color: COLORS.green, marginBottom: 6 }}>
        ✅ Réservé : {totalBookedPerNight.toFixed(2)} € / nuit
      </Text>

      {hasNoBooking && (
        <Text style={{ color: COLORS.orange }}>
          🕗 À réserver : {minToBook.toFixed(2)}–{maxToBook.toFixed(2)} € / nuit
        </Text>
      )}
    </View>
  );
};

export default BudgetSummary;