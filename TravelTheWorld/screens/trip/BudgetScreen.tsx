import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Header from '@/components/common/Header';
import { useTrip } from '@/context/TripContext';
import { COLORS } from '@/constants/Colors';

const BudgetScreen = () => {
  const { trip, plannings } = useTrip();

  const participants = (trip?.adults || 1) + (trip?.children || 0);

  const getCategorySum = (type: string) =>
    plannings
      .filter((p) => p.type === type)
      .reduce((sum, p) => sum + (p.price || 0), 0);

  const getReservedSum = (type: string) =>
    plannings
      .filter((p) => p.type === type && p.booked)
      .reduce((sum, p) => sum + (p.price || 0), 0);

  const total = plannings.reduce((sum, p) => sum + (p.price || 0), 0);
  const reserved = plannings.filter((p) => p.booked).reduce((sum, p) => sum + (p.price || 0), 0);
  const toReserve = total - reserved;

  const categories = ['hebergement', 'transport', 'activite'];

  const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
    hebergement: 'bed-outline',
    transport: 'car-outline',
    activite: 'color-palette-outline',
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>💰 Budget du voyage</Text>

        <View style={styles.card}>
          <Text style={styles.label}>
            Total estimé : <Text style={styles.amount}>{total.toFixed(2)} €</Text>
          </Text>
          <Text style={styles.label}>
            Réservé : <Text style={[styles.amount, { color: COLORS.green }]}>{reserved.toFixed(2)} €</Text>
          </Text>
          <Text style={styles.label}>
            À réserver : <Text style={[styles.amount, { color: COLORS.orange }]}>{toReserve.toFixed(2)} €</Text>
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>💳 Par personne ({participants} pers.)</Text>
          <Text style={styles.label}>Total/pers. : {(total / participants).toFixed(2)} €</Text>
          <Text style={styles.label}>Réservé/pers. : {(reserved / participants).toFixed(2)} €</Text>
        </View>

        {categories.map((cat) => {
          const catTotal = getCategorySum(cat);
          const catReserved = getReservedSum(cat);
          const catRemaining = catTotal - catReserved;

          return (
            <View key={cat} style={styles.card}>
              <Text style={styles.subtitle}>
                <Ionicons name={iconMap[cat]} size={18} color={COLORS.primary} /> {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Text>
              <Text style={styles.label}>Total : {catTotal.toFixed(2)} €</Text>
              <Text style={styles.label}>Réservé : {catReserved.toFixed(2)} €</Text>
              <Text style={styles.label}>À réserver : {catRemaining.toFixed(2)} €</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default BudgetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
  },
  content: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  amount: {
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
});
