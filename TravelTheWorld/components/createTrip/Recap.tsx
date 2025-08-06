import React from 'react';
import { View, Text } from 'react-native';

import { createtripStyles } from '@/styles/screens/createtrip.style';
import { TripData } from '@/types/trip.types';

// Composants
import WorldMap from '@/components/createTrip/recap/WorldMap';
import InfoRow from '@/components/createTrip/recap/InfoRow';
import FlagList from '@/components/createTrip/recap/FlagList';
import PrimaryButton from '../common/PrimaryButton';

type RecapProps = {
  data: TripData;
  onNext: () => void;
  onBack?: () => void;
};

const Recap = ({ data, onNext, onBack }: RecapProps) => {

  return (
    <View style={createtripStyles.stepWrapper}>
      {/* === Contenu principal === */}
      <View style={createtripStyles.stepContainer}>
        <Text style={createtripStyles.stepTitle}>Récapitulatif</Text>

        <View style={createtripStyles.stepContainer}>
          <WorldMap selectedCountries={data.countries} />
        </View>
        {/* === Nombre d’adultes ===
        <InfoRow label="Nombre d'adultes" value={data.title} /> */}
        <View style={createtripStyles.stepContainer}>
        <InfoRow
          label="Dates"
          value={`${data.startDate?.toLocaleDateString('fr-FR')} - ${data.endDate?.toLocaleDateString('fr-FR')}`}
        />

        </View>

        {/* <InfoRow label="Budget" value={`${data.budget} ${data.currency}`} />
        <InfoRow label="Participants" value={`${data.adults} adultes / ${data.children} enfants`} /> */}

        {/* <Text style={createtripStyles.stepDesciption}>Pays visités :</Text>
        <FlagList countries={data.countries} /> */}



      </View>

      {/* === Boutons de navigation === */}
      <View style={createtripStyles.fixedBottom}>
        {onBack && (
          <PrimaryButton title="Retour" onPress={onBack} style={createtripStyles.stepButtonHalf} />
        )}
        <PrimaryButton title="Continuer" onPress={onNext} style={createtripStyles.stepButtonHalf} />
      </View>
    </View>
  )
};

export default Recap;