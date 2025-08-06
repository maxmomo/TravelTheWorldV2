import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

{/* === COMPOSANTS === */ }
import Header from '@/components/common/Header';

// ==========================================
// =============== TRIP SCREEN ==============
// ==========================================

const SettingsScreen = () => {
  const { tripId } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
          Voyage n°{tripId}
        </Text>
        <Text>Tu pourras ici ajouter tes journées, hébergements, vols, etc.</Text>
      </View>
    </View>
  );
};

export default SettingsScreen;