import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Switch } from 'react-native-gesture-handler';

import PrimaryButton from '@/components/common/PrimaryButton';
import CustomTextInput from '@/components/createTrip/TextInput';

import { StepProps } from '@/types/planning.type';
import { createtripStyles } from '@/styles/screens/createtrip.style';
import { COLORS } from '@/constants/Colors';
import { useTranslation } from 'react-i18next';


const Step4_accomodation = ({ data, onNext, onBack, onChange, loading }: StepProps) => {
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
            <Text style={createtripStyles.stepTitle}>{t('plannings.step')} 4</Text>
            <Text style={createtripStyles.stepDescription}>{t('plannings.step4SubTitle')}</Text>

            {/* 🏠 Adresse exacte */}
            <CustomTextInput
              label="🏠 Adresse exacte"
              value={data.location ?? ''}
              onChangeText={(text) => onChange('location', text)}
              placeholder="Ex : 12 rue des vacances, 75000 Paris"
            />

            {/* 💰 Prix */}
            <CustomTextInput
              label="💰 Prix"
              value={data.price?.toString() ?? ''}
              onChangeText={(text) =>
                onChange('price', text === '' ? undefined : parseFloat(text))
              }
              keyboardType="numeric"
              placeholder="Ex : 150.00"
            />

            {/* ✅ Réservé ? */}
            <View style={createtripStyles.switchRow}>
              <Text style={createtripStyles.switchLabel}>✅ Réservation effectuée</Text>
              <Switch
                value={data.booked ?? false}
                onValueChange={(value) => onChange('booked', value)}
                thumbColor={COLORS.primary}
              />
            </View>
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

export default Step4_accomodation;
