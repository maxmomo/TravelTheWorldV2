import React, { useState } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';

{/* === COMPOSANTS === */ }
import PrimaryButton from '@/components/common/PrimaryButton';
import PlanningTypeCard from '@/components/createPlanning/PlanningTypeCard';

{/* === STYLES === */ }
import { createtripStyles } from '@/styles/screens/createtrip.style';
import { Ionicons } from '@expo/vector-icons';

{/* === TYPES === */ }
import { StepProps } from '@/types/planning.type';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

// ===========================================
// ================= STEP 1 ==================
// ===========================================

const planningTypes: {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
    { label: 'Hébergement', value: 'hebergement', icon: 'bed-outline' },
    { label: 'Transport', value: 'transport', icon: 'car-outline' },
    { label: 'Activité', value: 'activite', icon: 'bicycle-outline' },
    { label: 'Lieu', value: 'lieu', icon: 'location-outline' },
  ];

const Step1 = ({ data, onNext, onBack, onChange, loading }: StepProps) => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  // === 🧠 États ===
  const [selectedType, setSelectedType] = useState<string | null>(data.type || null);

  // ===========================================
  // =============== FONCTIONS =================
  // ===========================================

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    onChange('type', type);
  };

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
            <Text style={createtripStyles.stepTitle}>{t('plannings.step')} 1</Text>
            <Text style={createtripStyles.stepDescription}>{t('plannings.step1SubTitle')}</Text>

            {/* 📝 Saisie le type de planning */}
            <View>
              {planningTypes.map(({ label, value, icon }) => (
                <PlanningTypeCard
                  key={value}
                  label={label}
                  iconName={icon}
                  selected={selectedType === value}
                  onPress={() => handleSelectType(value)}
                />
              ))}
            </View>
          </View>

          {/* 🔘 Boutons de navigation */}
          <View style={createtripStyles.buttonRow}>
            {onBack && (
              <PrimaryButton title={t('global.return')} onPress={onBack} half />
            )}
            <PrimaryButton title={t('global.continue')} onPress={onNext} half disabled={loading || !selectedType} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Step1;