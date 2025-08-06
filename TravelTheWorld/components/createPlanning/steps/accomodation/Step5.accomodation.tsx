import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import PrimaryButton from '@/components/common/PrimaryButton';
import CustomTextInput from '@/components/createTrip/TextInput';

import { StepProps } from '@/types/planning.type';
import { createtripStyles } from '@/styles/screens/createtrip.style';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';
import NoteInput from '@/components/common/NoteInput';


const Step5_accomodation = ({ data, onNext, onBack, onChange, loading }: StepProps) => {
  const { t } = useTranslation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={80}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <ScrollView
            contentContainerStyle={[createtripStyles.content, { flexGrow: 1 }]}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={createtripStyles.stepTitle}>{t('plannings.step')} 5</Text>
            <Text style={createtripStyles.stepDescription}>{t('plannings.step5SubTitle')}</Text>

            <NoteInput
              label="📝 Note"
              value={data.note ?? ''}
              onChangeText={(text) => onChange('note', text)}
              placeholder="Ex : Logement proche de la plage, demander le code de la boîte à clés..."
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

export default Step5_accomodation;