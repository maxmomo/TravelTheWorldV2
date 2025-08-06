import React, { useState, useEffect } from 'react';
import { View, Alert, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Vibration } from 'react-native';
import * as FileSystem from 'expo-file-system';

{/* === COMPOSANTS === */ }
import Header from '@/components/common/Header';
import Step1 from '@/components/createPlanning/steps/Step1';
import Step2_accomodation from '@/components/createPlanning/steps/accomodation/Step2.accomodation';
import Step3_accomodation from '@/components/createPlanning/steps/accomodation/Step3.accomodation';
import Step4_accomodation from '@/components/createPlanning/steps/accomodation/Step4.accomodation';
import Step5_accomodation from '@/components/createPlanning/steps/accomodation/Step5.accomodation';
import Step2_transport from '@/components/createPlanning/steps/transport/Step2.transport';
import Step3_transport from '@/components/createPlanning/steps/transport/Step3.transport';
import Step4_transport from '@/components/createPlanning/steps/transport/Step4.transport';
import Step5_transport from '@/components/createPlanning/steps/transport/Step5.transport';
import Step6_transport from '@/components/createPlanning/steps/transport/Step6.transport';
import Step_documents from '@/components/createPlanning/Step.documents';

{/* === TYPES === */ }
import { PlanningData } from '@/types/planning.type';
import { DocumentUpload } from '@/types/planning.type';

{/* === API === */ }
import { createPlanning, updatePlanning } from '@/api/planning';
import { uploadDocument } from '@/api/document';

{/* === UTILS === */ }
import { getPlanningToEdit, clearPlanningToEdit } from '@/utils/storage/planningEdit';

{/* === CONTEXT === */ }
import { useTrip } from '@/context/TripContext';
import { useAuth } from '@/context/AuthContext';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';
import { COLORS } from '@/constants/Colors';
import { globalStyles } from '@/styles/common/global.style';
import Step_document from '@/components/createPlanning/steps/accomodation/Step.document';

// ===========================================
// ======== CREATE PLANNING SCREEN ===========
// ===========================================

const CreatePlanningScreen = () => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  // === 🔗 Navigation ===
  const router = useRouter();
  const { tripId, type, startDate, endDate, directStep, mode } = useLocalSearchParams();

  // === 🧩 Contexte ===  
  const { setPlannings } = useTrip();
  const { plannings } = useTrip();
  const { user } = useAuth();

  // === 📊 Constante ===
  const parsedTripId = Array.isArray(tripId) ? Number(tripId[0]) : Number(tripId);
  const isEditMode = mode === 'edit';
  const initialPlanningData: PlanningData = {
    id: 0,
    type: null,
    title: '',
    location: '',
    startDate: null,
    endDate: null,
    link: '',
    price: undefined,
    booked: false,
    note: '',
    transportMode: undefined,
    departureCity: undefined,
    arrivalCity: undefined
  };

  // === 🧠 États ===
  const [step, setStep] = useState(type ? 2 : 1);
  const [loading, setLoading] = useState(isEditMode);
  const [planningData, setPlanningData] = useState<PlanningData>({
    ...initialPlanningData,
    type: typeof type === 'string' ? (type as PlanningData['type']) : null,
    startDate: startDate ? new Date(startDate as string) : null,
    endDate: endDate ? new Date(endDate as string) : null,
  });
  const [pendingDocuments, setPendingDocuments] = useState<DocumentUpload[]>([]);

  // ===========================================
  // =============== FONCTIONS =================
  // ===========================================

  useEffect(() => {
    const load = async () => {
      if (isEditMode) {
        const planning = await getPlanningToEdit();

        if (planning) {
          setPlanningData({
            ...planning,
            startDate: planning.startDate ? new Date(planning.startDate) : null,
            endDate: planning.endDate ? new Date(planning.endDate) : null,
          });
          setStep(Number(directStep || 2));
        }

        setLoading(false);
      }
    };

    load();

    return () => {
      clearPlanningToEdit();
    };
  }, []);


  const nextStep = (documents?: { uri: string; name: string }[]) => {
    if (documents) setPendingDocuments(documents);
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (isEditMode && step === 2) {
      const startDateStr =
        planningData.startDate instanceof Date
          ? planningData.startDate.toISOString().split('T')[0]
          : '';
      // router.push({
      //   pathname: '/trip/[tripId]/day/[date]/accomodation',
      //   params: {
      //     tripId: String(parsedTripId),
      //     date: startDateStr,
      //   },
      // });
    } else {
      setStep((prev) => prev - 1);
    }
  };
  const updateData = (key: string, value: any) => {
    setPlanningData((prev) => ({ ...prev, [key]: value }));
  };

  const goBackToTripScreen = () => {
    router.back();
  };

  const handleSubmit = async () => {
    try {
      let planningId: number;
      let finalPlanning: PlanningData;

      if (isEditMode) {
        const updated = await updatePlanning(planningData, planningData.id);
        finalPlanning = updated;
        planningId = updated.id;
      } else {
        const created = await createPlanning(planningData, parsedTripId);
        finalPlanning = created.item;
        planningId = created.item.id;
      }

      setPlannings([...plannings.filter(p => p.id !== finalPlanning.id), finalPlanning]);

      // 🗂️ Upload des documents (si présents)
      for (const doc of pendingDocuments) {
        const mimeType = doc.uri.endsWith('.jpg') || doc.uri.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';
        await uploadDocument(planningId, user!.id, doc.uri, doc.name, mimeType);

      }

      Vibration.vibrate(100);

      const startDateStr = planningData.startDate instanceof Date
        ? planningData.startDate.toISOString().split('T')[0]
        : '';

      Alert.alert(
        t('global.success'),
        isEditMode
          ? t('plannings.updateSuccess')
          : t('plannings.createSuccess'),
        [
          {
            text: 'OK',
            onPress: () => {
              let route = '';

              switch (planningData.type) {
                case 'hebergement':
                  route = `/trip/${parsedTripId}/day/${startDateStr}/accomodation`;
                  break;
                case 'transport':
                  route = `/trip/${parsedTripId}/day/${startDateStr}/transport`;
                  break;
                case 'activite':
                  route = `/trip/${parsedTripId}/day/${startDateStr}/activity`;
                  break;
                default:
                  route = `/trip/${parsedTripId}/overview/days`;
              }

              router.push(route as any);
            },
          },
        ]
      );
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : t('global.unknownError');
      Alert.alert(t('global.error'), errorMessage);
    }
  };


  // ===========================================
  // ============ ÉTAPES & RENDU ===============
  // ===========================================

  const stepsByType = {
    hebergement: [Step2_accomodation, Step3_accomodation, Step4_accomodation, Step5_accomodation, Step_document],
    transport: [Step2_transport, Step3_transport, Step4_transport, Step5_transport, Step6_transport],
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <Step1
          data={planningData}
          onNext={nextStep}
          onBack={goBackToTripScreen}
          onChange={updateData}
          loading={loading}
        />
      );
    }

    const components = stepsByType[planningData.type as keyof typeof stepsByType];
    const CurrentStep = components?.[step - 2];
    if (!CurrentStep) return null;

    const isDocumentStep = CurrentStep === Step_document;
    const isLast = step === components.length + 1;

    return (
      <CurrentStep
        data={planningData}
        onNext={isLast ? handleSubmit : nextStep}
        onBack={prevStep}
        onChange={updateData}
        loading={loading}
        pendingDocuments={pendingDocuments}
        setPendingDocuments={setPendingDocuments}
      />
    );
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
}

export default CreatePlanningScreen;