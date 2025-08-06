import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';
import { styles } from '@/styles/components/common/accommodationFoundCard.style';

type AccommodationFoundCardProps = {
  title: string;
  startDate: string;
  endDate: string;
};

const formatDateFr = (date: Date | string) =>
  new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

const AccommodationFoundCard = ({ title, startDate, endDate }: AccommodationFoundCardProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Valeur de départ : invisible

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Opacité 1 (pleinement visible)
      duration: 400, // Durée en ms
      useNativeDriver: true, // Optimisé natif
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.headerText}>
        ✅ Une réservation a été trouvée
      </Text>

      <Text style={styles.titleText}>
        🛏️ {title}
      </Text>

      <Text style={styles.dateText}>
        {startDate ? formatDateFr(startDate) : 'Date inconnue'}
        {' '}→{' '}
        {endDate ? formatDateFr(endDate) : 'Date inconnue'}
      </Text>
    </Animated.View>
  );
};

export default AccommodationFoundCard;
