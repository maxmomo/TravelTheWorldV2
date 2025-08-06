import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

{/* === COMPOSANTS === */ }
import PrimaryButton from '@/components/common/PrimaryButton';
import CustomTextInput from '@/components/createTrip/TextInput';
import AccommodationSearchButtons from '@/components/common/AccomodationSearchButtons';

{/* === TYPES === */ }
import { StepProps } from '@/types/planning.type';

{/* === STYLES === */ }
import { createtripStyles } from '@/styles/screens/createtrip.style';

{/* === CONTEXT === */ }
import { useTrip } from '@/context/TripContext';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

const Step3_accomodation = ({ data, onNext, onBack, onChange, loading }: StepProps) => {

  const { t } = useTranslation();
  const { trip } = useTrip();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={80} // ajuste selon la taille de ton header
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>

          {/* Partie scrollable qui remonte avec le clavier */}
          <ScrollView
            contentContainerStyle={[createtripStyles.content, { flexGrow: 1 }]}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={createtripStyles.stepTitle}>{t('plannings.step')} 3</Text>
            <Text style={createtripStyles.stepDescription}>{t('plannings.step3SubTitle')}</Text>

            <AccommodationSearchButtons
              location={data.title}
              startDate={data.startDate}
              endDate={data.endDate}
              adults={trip?.adults}
              children={trip?.children}
            />

            <CustomTextInput
              label={t('plannings.planningLinkInput')}
              value={data.link ?? ''}
              onChangeText={(text) => onChange('link', text)}
              placeholder={t('plannings.planningLinkPlaceHolder')}
            />
          </ScrollView>


        </View>
      </TouchableWithoutFeedback>
      <View style={createtripStyles.buttonRow}>
        {onBack && (
          <PrimaryButton title={t('global.return')} onPress={onBack} half />
        )}
        <PrimaryButton title={t('global.continue')} onPress={onNext} half disabled={loading} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Step3_accomodation;