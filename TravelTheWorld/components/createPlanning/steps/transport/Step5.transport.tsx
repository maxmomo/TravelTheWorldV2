import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

{/* === COMPOSANTS === */ }
import PrimaryButton from '@/components/common/PrimaryButton';
import TransportSearchButtons from '@/components/common/TransportSearchButtons';
import CustomTextInput from '@/components/createTrip/TextInput';

{/* === TYPES === */ }
import { StepProps } from '@/types/planning.type';

{/* === STYLES === */ }
import { createtripStyles } from '@/styles/screens/createtrip.style';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

const Step5_transport = ({ data, onNext, onBack, onChange, loading }: StepProps) => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, padding: 16 }}>
          {/* 🔍 Boutons vers plateformes selon le transport */}
          <TransportSearchButtons
            departureCity={data.departureCity}
            arrivalCity={data.arrivalCity}
            startDate={data.startDate}
            transportMode={data.transportMode}
          />

          {/* 🔗 Champ pour coller le lien */}
          <CustomTextInput
            label="🔗 Lien de réservation"
            value={data.link ?? ''}
            onChangeText={(text) => onChange('link', text)}
            placeholder="https://www.google.com/flights/..."
          />

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

export default Step5_transport;
