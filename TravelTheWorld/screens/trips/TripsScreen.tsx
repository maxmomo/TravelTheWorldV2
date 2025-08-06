import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

{/* === COMPOSANTS === */ }
import Header from '@/components/common/Header';
import PrimaryButton from '@/components/common/PrimaryButton';
import TripCard from '@/components/trip/TripCard';

{/* === API === */ }
import { getTrips, joinTrip } from '@/api/trip';

{/* === TYPES === */ }
import { GetTripsResponse, TripData } from '@/types/trip.types';

{/* === STYLES === */ }
import { textStyles } from '@/styles/common/text.style';
import { globalStyles } from '@/styles/common/global.style';
import { COLORS } from '@/constants/Colors';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';
import JoinTripModal from '@/components/modal/JoinTripModal';

// ===========================================
// =============== TRIPS SCREEN ==============
// ===========================================

const TripsScreen = () => {

  // === Traduction ===
  const { t } = useTranslation();

  // === Navigation ===
  const router = useRouter();

  // === États ===
  const [trips, setTrips] = useState<TripData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [joinModalVisible, setJoinModalVisible] = useState(false);

  // Fonction pour récupérer les voyages
  const fetchTrips = useCallback(async () => {
    try {
      setError('');
      const response: GetTripsResponse = await getTrips();
      setTrips(response?.trips ?? []);
    } catch (err: any) {
      setError(err.message || t('error.global.unknown'));
    } finally {
      setLoading(false);
    }
  }, []);

  // Création de voyage
  const handleAddTrip = () => {
    if (!loading) {
      router.push('/trips/create');
    }
  };

  // Rejoindre le voyage
  const handleJoinTrip = () => {
    setJoinModalVisible(true);
  };

  const handleSubmitCode = async (code: string) => {
    try {
      const result = await joinTrip(code);
      Alert.alert('Succès', result.message);
      setJoinModalVisible(false);
      await fetchTrips();
    } catch (error: any) {
      console.error('❌ Erreur lors de la jointure :', error);
      Alert.alert('Erreur', error.message || 'Une erreur est survenue.');
    }
  };

  // Rechargement à chaque focus de l'écran
  useFocusEffect(
    useCallback(() => {
      fetchTrips();
    }, [fetchTrips])
  );

  const renderItem = ({ item }: { item: TripData }) => {
    const dateRange = item.startDate && item.endDate
      ? { start: item.startDate.toString(), end: item.endDate.toString() }
      : undefined;

    return (
      <TripCard
        title={item.title}
        dateRange={dateRange}
        onPress={() =>
          router.push({
            pathname: '../trip/[tripId]/overview/',
            params: { tripId: item.id.toString() },
          })
        }
      />
    );
  };

  if (loading) {
    return (
      <View style={globalStyles.loading}>
        <Text>{t('global.loading')}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header disabledBack />
      <View style={globalStyles.container}>

        {loading ? (
          <View style={globalStyles.loadingOverlay}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        ) : error ? (
          <Text style={textStyles.error}>{error}</Text>
        ) : trips.length === 0 ? (
          <View style={globalStyles.emptyContainer}>
            <Text style={textStyles.title}>🌍 Aucun voyage pour le moment</Text>
            <Text style={textStyles.paragraph}>Crée ton premier voyage ou rejoins celui d’un ami !</Text>
          </View>
        ) : (
          <FlatList
            data={trips}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={globalStyles.listContainer}
            showsVerticalScrollIndicator={false}
          />
        )}

        <View style={globalStyles.bottomButtonContainer}>
          <PrimaryButton
            title={t('trips.createButton')}
            onPress={handleAddTrip}
            disabled={loading}
            half={true}
          />
          <PrimaryButton
            title={t('trips.joinButton')}
            onPress={handleJoinTrip}
            disabled={loading}
            half={true}
          />
        </View>
      </View>
      <JoinTripModal
        visible={joinModalVisible}
        onClose={() => setJoinModalVisible(false)}
        onSubmit={handleSubmitCode}
      />
    </View>
  );
};

export default TripsScreen;