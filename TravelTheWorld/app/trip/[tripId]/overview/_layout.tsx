import { Tabs } from 'expo-router';
import { COLORS } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';


export default function TripTabsLayout() {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  return (
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
        name="days"
        options={{
          title: t('tabs.days'),
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: t('tabs.map'),
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="map-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: t('tabs.budget'),
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="cash-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('tabs.settings'),
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}