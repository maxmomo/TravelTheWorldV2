import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

{/* === COMPOSANTS === */ }
import PrimaryButton from '@/components/common/PrimaryButton';
import CustomTextInput from '@/components/createTrip/TextInput';
import PeopleCounter from '../PeopleCounter';

{/* === TYPES === */ }
import { StepProps } from '@/types/trip.types';

{/* === STYLES === */ }
import { createtripStyles } from '@/styles/screens/createtrip.style';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';


// ===========================================
// ================= STEP 2 ==================
// ===========================================

const Step2 = ({ data, onNext, onBack, onChange, loading }: StepProps) => {

  // === Traduction ===
  const { t } = useTranslation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={createtripStyles.content}>

            <Text style={createtripStyles.stepTitle}>{t('trips.step')} 3</Text>
            <Text style={createtripStyles.stepDescription}>{t('trips.step3SubTitle')}</Text>

            <CustomTextInput
              label={t('trips.tripBudgetInput')}
              value={data.budget}
              onChangeText={(text) => onChange('budget', text)}
              placeholder={t('trips.tripBudgetPlaceHolder')}
              keyboardType="numeric"
            />

            <PeopleCounter
              label={t('components.peopleCounter.adults')}
              value={data.adults}
              onChange={(value) => onChange('adults', value)}
            />

            <PeopleCounter
              label={t('components.peopleCounter.children')}
              value={data.children}
              onChange={(value) => onChange('children', value)}
            />

          </View>

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

export default React.memo(Step2);