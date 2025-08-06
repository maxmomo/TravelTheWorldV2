import React from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

{/* === COMPOSANTS === */ }
import PrimaryButton from '@/components/common/PrimaryButton';

{/* === TYPES === */ }
import { StepProps } from '@/types/planning.type';

{/* === STYLES === */ }
import { createtripStyles } from '@/styles/screens/createtrip.style';
import { COLORS } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

const transportOptions = [
  { label: 'Avion', value: 'avion', icon: 'airplane-outline' },
  { label: 'Train', value: 'train', icon: 'train-outline' },
  { label: 'Bus', value: 'bus', icon: 'bus-outline' },
  { label: 'Voiture', value: 'voiture', icon: 'car-outline' },
  { label: 'Taxi', value: 'taxi', icon: 'car-sport-outline' },
  { label: 'Uber / VTC', value: 'uber', icon: 'navigate-outline' },
  { label: 'Ferry', value: 'ferry', icon: 'boat-outline' },
  { label: 'Vélo', value: 'velo', icon: 'bicycle-outline' },
  { label: 'À pied', value: 'pied', icon: 'walk-outline' },
];

const Step4_transport = ({ data, onNext, onBack, onChange, loading }: StepProps) => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  const selected = data.transportMode;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, padding: 16 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 16 }}>
            {transportOptions.map((opt) => (
              <TouchableOpacity
                key={opt.value}
                onPress={() => onChange('transportMode', opt.value)}
                style={{
                  width: '30%',
                  paddingVertical: 16,
                  alignItems: 'center',
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: selected === opt.value ? COLORS.primary : COLORS.black3,
                  backgroundColor: selected === opt.value ? COLORS.light_primary : COLORS.white,
                }}
              >
                <Ionicons name={opt.icon as any} size={28} color={selected === opt.value ? COLORS.primary : COLORS.black3} />
                <Text style={{ marginTop: 8, fontSize: 14 }}>{opt.label}</Text>
              </TouchableOpacity>
            ))}
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

export default Step4_transport;