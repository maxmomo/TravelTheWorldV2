import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

import { DateInputProps } from '@/types/components/form.types';
import { dateInputStyles as styles } from '@/styles/components/dateInput.style';
import { COLORS } from '@/constants/Colors';

const DateInput = ({ label, value, onChange, placeholder }: DateInputProps) => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  const [isVisible, setVisible] = useState(false);

  const displayText = value
    ? value.toLocaleDateString('fr-FR')
    : placeholder || t('components.dateInput.placeHolder');

  const textColor = value ? styles.text : [styles.text, { color: COLORS.inputPlaceholder }];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text style={textColor}>
          {displayText}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={(date) => {
          setVisible(false);
          onChange?.(date);
        }}
        onCancel={() => setVisible(false)}
        date={value ?? new Date()}
        locale="fr-FR"
      />
    </View>
  );
};

export default DateInput;