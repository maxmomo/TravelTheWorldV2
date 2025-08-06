import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { peopleCounterStyles as styles } from '@/styles/components/peopleCounter.style';
import { PeopleCounterProps } from '@/types/components/form.types';

export const PeopleCounter = ({ label, value, onChange, icon }: PeopleCounterProps) => {
  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value > 0) onChange(value - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{icon ? `${icon} ${label}` : label}</Text>
      <View style={styles.counterRow}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PeopleCounter;