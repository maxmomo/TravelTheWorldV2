import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

{/* === COMPOSANTS === */ }
import PrimaryButton from '@/components/common/PrimaryButton';
import DateInput from '@/components/createTrip/DateInput';
import CitySearchInput from '@/components/common/CitySearchInput';
import AccommodationFoundCard from '@/components/common/AccommodationFoundCard';

{/* === TYPES === */ }
import { StepProps } from '@/types/planning.type';

{/* === STYLES === */ }
import { createtripStyles } from '@/styles/screens/createtrip.style';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

import { useTrip } from '@/context/TripContext';

const toDateOnlyString = (date: Date | string) =>
  new Date(date).toISOString().split('T')[0];

const formatDateFr = (date: Date | string) =>
  new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

const Step3_transport = ({ data, onNext, onBack, onChange, loading }: StepProps) => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  const { plannings } = useTrip();
  const [notification, setNotification] = useState<null | {
    title: string;
    startDate: string;
    endDate: string;
  }>(null);

  useEffect(() => {
    if (data.startDate) {
      checkAccommodation(new Date(data.startDate));
    }
  }, [data.startDate, plannings]);

  const checkAccommodation = (selectedDate: Date) => {
    const selectedDateString = toDateOnlyString(selectedDate);

    const found = plannings.find((p) =>
      p.type === 'hebergement' &&
      p.startDate &&
      toDateOnlyString(p.startDate) === selectedDateString &&
      p.booked === true
    );

    if (found) {
      setNotification({
        title: found.title || 'Lieu inconnu',
        startDate: found.startDate ? toDateOnlyString(found.startDate) : '',
        endDate: found.endDate ? toDateOnlyString(found.endDate) : '',
      });
    } else {
      setNotification(null);
    }
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
            <Text style={createtripStyles.stepTitle}>{t('plannings.step')} 3</Text>
            <Text style={createtripStyles.stepDescription}>{t('plannings.step2SubTitle')}</Text>

            <DateInput
              label="📅 Date de départ du transport"
              value={data.endDate ? new Date(data.endDate) : null}
              onChange={(date) => {
                onChange('endDate', date.toISOString());
                checkAccommodation(date);
              }}
            />

            <CitySearchInput
              label="📍 Ville de départ"
              value={data.arrivalCity ?? ''}
              onChangeText={(text) => onChange('arrivalCity', text)}
              placeholder="Ex : Ushuaïa, AR"
            />

            {notification && (
              <AccommodationFoundCard
                title={notification.title}
                startDate={notification.startDate}
                endDate={notification.endDate}
              />
            )}
          </View>

          {/* 🔘 Boutons de navigation */}
          <View style={createtripStyles.buttonRow}>
            {onBack && (
              <PrimaryButton title={t('global.return')} onPress={onBack} half />
            )}
            <PrimaryButton title={t('global.continue')} onPress={onNext} half disabled={loading} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Step3_transport;
