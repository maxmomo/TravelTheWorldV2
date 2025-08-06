// app/trip/[tripId]/planning/[planningId]/hebergement.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ActivityScreen = () => {
  const { tripId, planningId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activité</Text>
      <Text>Trip ID : {tripId}</Text>
      <Text>Planning ID : {planningId}</Text>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
