import React, { useState, useCallback, useMemo } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

{/* === COMPOSANTS === */ }
import Header from '@/components/common/Header';
import Step1 from '@/components/createTrip/steps/Step1';
import Step2 from '@/components/createTrip/steps/Step2';

{/* === TYPES === */ }
import { CreateTripResponse, TripData, StepProps } from '@/types/trip.types';

{/* === API === */ }
import { createTrip } from '@/api/trip';

{/* === STYLES === */ }
import { globalStyles } from '@/styles/common/global.style';
import { COLORS } from '@/constants/Colors';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

const initialTripData: TripData = {
  id: 0,
  title: '',
  startDate: null,
  endDate: null,
  countries: [],
  budget: '',
  currency: '',
  adults: 1,
  children: 0,
};

// ===========================================
// ========== CREATE TRIP SCREEN =============
// ===========================================

const CreateTripScreen = () => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  // === 🔗 Navigation ===
  const router = useRouter();

  // === 🧠 États ===
  const [step, setStep] = useState(1);
  const [tripData, setTripData] = useState<TripData>(initialTripData);
  const [loading, setLoading] = useState<boolean>(false);

  // ===========================================
  // =============== FONCTIONS =================
  // ===========================================

  // ➕ Étapes suivantes / précédentes
  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);
  const prevStep = useCallback(() => setStep((prev) => prev - 1), []);
  const goBackToTripsScreen = useCallback(() => router.back(), [router]);

  // ✏️ Mise à jour des données du voyage
  const updateData = useCallback((key: keyof TripData, value: any) => {
    setTripData((prev) => {
      if (prev[key] === value) return prev; // ❌ évite les updates inutiles
      return { ...prev, [key]: value };
    });
  }, []);

  // ✈️ Création du voyage (appel API)
  const handleCreateTrip = useCallback(async () => {
    setLoading(true);
    try {
      const response: CreateTripResponse = await createTrip(tripData);
      if (response) {
        setStep(1);
        setTripData(initialTripData);
        Alert.alert(t('global.success'), t('trips.tripCreated'), [
          {
            text: t('global.ok'),
            onPress: () => router.push('/trips'),
          },
        ]);
      } else {
        throw new Error(t('error.trips.creationError'));
      }
    } catch (err: any) {
      const errorMessage = err instanceof Error ? err.message : t('error.global.unknow');
      Alert.alert(t('error.error'), errorMessage);
    } finally {
      setLoading(false);
    }
  }, [tripData, t, router]);

  // ===========================================
  // ============ ÉTAPES & RENDU ===============
  // ===========================================

  const steps = [Step1, Step2];

  // ✅ Props stables pour éviter les re-renders des steps
  const stepProps: StepProps = useMemo(() => ({
    data: tripData,
    onNext: step === steps.length ? handleCreateTrip : nextStep,
    onBack: step === 1 ? goBackToTripsScreen : prevStep,
    onChange: updateData,
    loading,
  }), [
    tripData,
    step,
    handleCreateTrip,
    nextStep,
    prevStep,
    goBackToTripsScreen,
    updateData,
    loading,
  ]);

  const renderStep = () => {
    const CurrentStep = steps[step - 1];
    return CurrentStep ? <CurrentStep {...stepProps} /> : null;
  };

  // ===========================================
  // ============== AFFICHAGE ==================
  // ===========================================

  return (
    <View style={{ flex: 1 }}>
      <Header disabledBack />
      <View style={globalStyles.container}>

        {/* 🔄 Loading spinner */}
        {loading && (
          <View style={globalStyles.loadingOverlay}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        )}

        {/* 📄 Étape courante */}
        {!loading && renderStep()}
      </View>
    </View>
  );
};

export default CreateTripScreen;