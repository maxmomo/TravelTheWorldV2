import React from 'react';
import { View, Text, Alert, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

{/* === COMPOSANTS === */ }
import DateInput from '@/components/createTrip/DateInput';
import PrimaryButton from '@/components/common/PrimaryButton';
import CitySearchInput from '@/components/common/CitySearchInput';

{/* === TYPES === */ }
import { StepProps } from '@/types/planning.type';

{/* === STYLES === */ }
import { createtripStyles } from '@/styles/screens/createtrip.style';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

const Step2_accomodation = ({ data, onNext, onBack, onChange, loading }: StepProps) => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  // === 📊 Constante ===
  const isValid =
  !!data.title?.trim() &&
  data.startDate !== null &&
  data.endDate !== null &&
  new Date(data.endDate) >= new Date(data.startDate);

  // ===========================================
  // =============== FONCTIONS =================
  // ===========================================

  const handleStartDateChange = (date: Date) => {
    onChange('startDate', date);
    if (!data.endDate || new Date(data.endDate) < date) {
      onChange('endDate', date);
    }
  };

  const handleEndDateChange = (date: Date) => {
    if (data.startDate && new Date(date) < new Date(data.startDate)) {
      Alert.alert(
        t('error.date.invalid'),
        t('error.date.startUpEnd2'),
        [{ text: t('global.ok') }]
      );
    } else {
      onChange('endDate', date);
    }
  };

  const handleNext = () => {
    if (!data.title || data.title.trim() === '') {
      Alert.alert(
        t('error.location.locationRequire'),
        t('error.location.fillLocation'), 
        [{ text: t('global.ok') }]
      );
      return;
    }

    if (!data.startDate || !data.endDate || new Date(data.endDate) < new Date(data.startDate)) {
      Alert.alert(
        t('error.date.invalid'),
        t('error.date.checkStartEnd2'),
        [{ text: t('global.ok') }]
      );
      return;
    }

    onNext();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={createtripStyles.content}>

            {/* 📝 Titre de l'étape */}
            <Text style={createtripStyles.stepTitle}>{t('plannings.step')} 2</Text>
            <Text style={createtripStyles.stepDescription}>{t('plannings.step2SubTitle')}</Text>

            <CitySearchInput
              label={t('plannings.planningLocationInput')}
              value={data.title ?? ''}
              onChangeText={(text) => onChange('title', text)}
              placeholder={t('plannings.planningLocationPlaceHolder')}
            />

            <DateInput
              label={t('plannings.planningStartDateInput')}
              value={data.startDate ? new Date(data.startDate) : null}
              onChange={handleStartDateChange}
            />

            <DateInput
              label={t('plannings.planningEndDateInput')}
              value={data.endDate ? new Date(data.endDate) : null}
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

export default Step2_accomodation;