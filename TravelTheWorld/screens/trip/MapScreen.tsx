import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Header from '@/components/common/Header';
import { useTrip } from '@/context/TripContext';
import { getPlannings } from '@/api/planning';
import { getCoordinatesFromAddress } from '@/utils/geocode';
import { PlanningData } from '@/types/planning.type';
import { METRICS } from '@/constants/metrics';

const transportIconMap: Record<NonNullable<PlanningData['transportMode']>, keyof typeof Ionicons.glyphMap> = {
  avion: 'airplane-outline',
  train: 'train-outline',
  bus: 'bus-outline',
  voiture: 'car-outline',
  taxi: 'car-sport-outline',
  uber: 'navigate-outline',
  ferry: 'boat-outline',
  velo: 'bicycle-outline',
  pied: 'walk-outline',
};

const iconColorMap: Record<NonNullable<PlanningData['type']>, string> = {
  hebergement: 'red',
  transport: 'blue',
  activite: 'green',
};

const MapScreen = () => {
  const { trip } = useTrip();
  const [markers, setMarkers] = useState<any[]>([]);
  const [lines, setLines] = useState<{ coords: { latitude: number; longitude: number }[] }[]>([]);

  const loadMarkers = useCallback(async () => {
    if (!trip?.id) return;

    try {
      const data = await getPlannings(Number(trip.id));
      const results: any[] = [];
      const tempLines: { coords: { latitude: number; longitude: number }[] }[] = [];


      for (const planning of data) {
        // Hébergement
        if (planning.type === 'hebergement' && planning.location) {
          const coords = await getCoordinatesFromAddress(planning.location);

          if (coords) {
            results.push({
              id: `h-${planning.id}`,
              title: planning.title ?? 'Hébergement',
              description: planning.location,
              coords,
              color: iconColorMap.hebergement,
              icon: undefined,
            });
          }
        }

        // Transport
        if (planning.type === 'transport' && planning.departureCity && planning.arrivalCity) {
          const isPlane = planning.transportMode === 'avion';
          const depQuery = isPlane ? `${planning.departureCity} aeroport` : planning.departureCity;
          const arrQuery = isPlane ? `${planning.arrivalCity} aeroport` : planning.arrivalCity;

          const depCoords = await getCoordinatesFromAddress(depQuery);
          const arrCoords = await getCoordinatesFromAddress(arrQuery);
          const icon = planning.transportMode ? transportIconMap[planning.transportMode] : undefined;

          if (depCoords) {
            results.push({
              id: `t-${planning.id}-dep`,
              title: planning.departureCity,
              description: 'Départ',
              coords: depCoords,
              color: iconColorMap.transport,
              icon,
            });
          }

          if (arrCoords) {
            results.push({
              id: `t-${planning.id}-arr`,
              title: planning.arrivalCity,
              description: 'Arrivée',
              coords: arrCoords,
              color: iconColorMap.transport,
              icon,
            });
          }

          if (depCoords && arrCoords) {
            tempLines.push({ coords: [depCoords, arrCoords] });
          }
        }
      }

      setMarkers(results);
      setLines(tempLines);
    } catch (err) {
      console.error('Erreur chargement map:', err);
    }
  }, [trip]);

  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        await loadMarkers();
      };
      fetch();
    }, [loadMarkers])
  );

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.8566,
          longitude: 2.3522,
          latitudeDelta: 30,
          longitudeDelta: 30,
        }}
      >
        {markers.map((marker) =>
          marker.icon ? (
            <Marker
              key={marker.id}
              coordinate={marker.coords}
              title={marker.title}
              description={marker.description}
            >
              <Ionicons name={marker.icon} size={24} color={marker.color} />
            </Marker>
          ) : (
            <Marker
              key={marker.id}
              coordinate={marker.coords}
              title={marker.title}
              description={marker.description}
              pinColor={marker.color}
            />
          )
        )}

        {lines.map((line, idx) => (
          <Polyline
            key={`line-${idx}`}
            coordinates={line.coords}
            strokeColor="blue"
            strokeWidth={1}
            lineDashPattern={[5, 5]}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
  },
});


export default MapScreen;
