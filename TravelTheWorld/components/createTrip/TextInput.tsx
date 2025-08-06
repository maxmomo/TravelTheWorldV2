import React from 'react';
import { View, Text, TextInput } from 'react-native';

{/* === TYPES === */ }
import { CustomTextInputProps } from '@/types/components/form.types';

{/* === STYLE === */ }
import { customTextInputStyles as styles } from '@/styles/components/customTextInput.style';
import { COLORS } from '@/constants/Colors';

const CustomTextInput = ({label, value, onChangeText, placeholder, keyboardType = 'default'}: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.inputPlaceholder}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  );
};

export default CustomTextInput;