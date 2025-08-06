import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { searchCities } from '@/api/citySearch';
import { customTextInputStyles as styles } from '@/styles/components/customTextInput.style';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

type CitySuggestion = {
  id: string;
  label: string;
};

const CitySearchInput = ({ label, value, onChangeText, placeholder }: Props) => {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (query.length >= 2) {
        setLoading(true);
        const results = await searchCities(query); 
        setSuggestions(results);
        setLoading(false);
      } else {
        setSuggestions([]);
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (label: string) => {
    onChangeText(label);
    setQuery(label);
    setSuggestions([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={COLORS.inputPlaceholder}
      />
      {loading && <ActivityIndicator size="small" />}
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        style={{'marginTop': METRICS.spacing}}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelect(item.label)} style={styles.suggestion}>
            <Text>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CitySearchInput;