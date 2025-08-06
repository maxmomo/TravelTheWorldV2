import React, { useCallback } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

{/* === COMPOSANTS === */ }
import DateInput from '@/components/createTrip/DateInput';
import CustomTextInput from '@/components/createTrip/TextInput';
import PrimaryButton from '@/components/common/PrimaryButton';

{/* === TYPES === */ }
import { StepProps } from '@/types/trip.types';

{/* === STYLES === */ }
import { createtripStyles } from '@/styles/screens/createtrip.style';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

// ===========================================
// ================= STEP 1 ==================
// ===========================================

const Step1 = ({ data, onNext, onBack, onChange, loading }: StepProps) => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  // === 📊 Constante ===
  const isValid =
  data.title.trim() !== '' &&
  data.startDate !== null &&
  data.endDate !== null &&
  new Date(data.endDate) >= new Date(data.startDate);

  // ===========================================
  // =============== FONCTIONS =================
  // ===========================================

  const handleStartDateChange = useCallback((date: Date) => {
    onChange('startDate', date);
    if (!data.endDate || new Date(data.endDate) < date) {
      onChange('endDate', date);
    }
  }, [data.endDate, onChange]);

  const handleEndDateChange = useCallback((date: Date) => {
    if (data.startDate && new Date(date) < new Date(data.startDate)) {
      Alert.alert(
        t('error.date.invalid'),
        t('error.date.startUpEnd'),
        [{ text: t('global.ok') }]
      );
    } else {
      onChange('endDate', date);
    }
  }, [data.startDate, onChange, t]);

  const handleNext = useCallback(() => {
    if (!data.title || data.title.trim() === '') {
      Alert.alert(t('error.trip.nameRequire'), t('error.trip.fillName'), [{ text: t('global.ok') }]);
      return;
    }

    if (!data.startDate || !data.endDate || new Date(data.endDate) < new Date(data.startDate)) {
      Alert.alert(
        t('error.date.invalid'),
        t('error.date.checkStartEnd'),
        [{ text: t('global.ok') }]
      );
      return;
    }

    onNext();
  }, [data, onNext, t]);

  const handleTitleChange = useCallback((text: string) => {
    onChange('title', text);
  }, [onChange]);

  // ===========================================
  // ================ AFFICHAGE ================
  // ===========================================

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={createtripStyles.content}>

            {/* 📝 Titre de l'étape */}
            <Text style={createtripStyles.stepTitle}>{t('trips.step')} 1</Text>
            <Text style={createtripStyles.stepDescription}>{t('trips.step1SubTitle')}</Text>

            {/* 📝 Saisie du nom du voyage */}
            <CustomTextInput
              label={t('trips.tripNameInput')}
              value={data.title}
              onChangeText={handleTitleChange}
              placeholder={t('trips.tripNamePlaceHolder')}
            />

            {/* 📅 Saisie de la date de départ */}
            <DateInput
              label={t('trips.tripStartDateInput')}
              value={data.startDate}
              onChange={handleStartDateChange}
            />

            {/* 📅 Saisie de la date de retour */}
            <DateInput
              label={t('trips.tripEndDateInput')}
              value={data.endDate}
              onChange={handleEndDateChange}
            />
          </View>

          {/* 🔘 Boutons de navigation */}
          <View style={createtripStyles.buttonRow}>
            {onBack && (
              <PrimaryButton title={t('global.return')} onPress={onBack} half />
            )}
            <PrimaryButton title={t('global.continue')} onPress={handleNext} half disabled={loading || !isValid} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default React.memo(Step1);