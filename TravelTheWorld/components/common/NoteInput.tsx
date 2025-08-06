import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from '@/styles/components/common/noteInput.style';

type NoteInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const NoteInput = ({ label, value, onChangeText, placeholder }: NoteInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.noteInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline
        numberOfLines={6}
        textAlignVertical="top"
      />
    </View>
  );
};

export default NoteInput;