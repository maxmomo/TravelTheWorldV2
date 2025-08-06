import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/Colors';
import { TripDayContext } from '@/context/TripDayContext';
import { useLocalSearchParams } from 'expo-router';

export default function DayLayout() {

  const { tripId, date } = useLocalSearchParams();

  return (
    <TripDayContext.Provider value={{ tripId: String(tripId), date: String(date) }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.secondary,
          tabBarInactiveTintColor: COLORS.black3,
          tabBarStyle: {
            backgroundColor: COLORS.white2,
            borderTopWidth: 1,
          },
        }}
      >
        <Tabs.Screen
          name="accomodation"
          options={{
            title: 'Hébergement',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="bed-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="transport"
          options={{
            title: 'Transport',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="car-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="activity"
          options={{
            title: 'Activité',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="walk-outline" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="place"
          options={{
            title: 'Lieu',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons name="location-outline" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </TripDayContext.Provider>
  );
}