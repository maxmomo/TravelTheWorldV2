import React, { useEffect, useState } from 'react';
import { View, Text, Share, ActivityIndicator } from 'react-native';
import { useTrip } from '@/context/TripContext';
import Header from '@/components/common/Header';
import SectionCard from '@/components/trip/SectionCard';
import PrimaryButton from '@/components/common/PrimaryButton';

import { globalStyles } from '@/styles/common/global.style';
import { settingsStyles } from '@/styles/components/trip/settings.style.ts';
import { getTripMembers } from '@/api/trip';

const SettingsScreen = () => {
  const { trip } = useTrip();
  const [members, setMembers] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // 🔄 Récupération des membres
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const result = await getTripMembers(trip!.id);
        setMembers(result);
      } catch (err: any) {
        setError(err.message || 'Erreur de chargement des membres');
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [trip!.id]);

  // 📤 Partager le code d’invitation
  const handleShareCode = async () => {
    try {
      await Share.share({
        message: `Rejoins mon voyage "${trip?.title}" avec le code : ${trip?.key}`,
      });
    } catch (error) {
      console.error('Erreur lors du partage :', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={globalStyles.container}>

        {/* === Code d’invitation === */}
        <SectionCard title="🎟 Code d’invitation">
          <Text style={settingsStyles.codeText}>{trip?.key}</Text>
          <PrimaryButton
            title="Partager le code"
            onPress={handleShareCode}
            small
          />
        </SectionCard>

        {/* === Budget estimé === */}
        <SectionCard title="💰 Budget estimé">
          <Text style={settingsStyles.valueText}>{trip?.budget} €</Text>
          <PrimaryButton
            title="Modifier le budget"
            onPress={() => {}}
            small
          />
        </SectionCard>

        {/* === Nombre de participants === */}
        <SectionCard title="👥 Participants">
          <Text style={settingsStyles.valueText}>
            {trip?.adults} adulte(s), {trip?.children} enfant(s)
          </Text>
        </SectionCard>

        {/* === Membres du voyage === */}
        <SectionCard title="🔑 Membres du voyage">
          {loading ? (
            <ActivityIndicator size="small" />
          ) : error ? (
            <Text style={{ color: 'red' }}>{error}</Text>
          ) : members.length === 0 ? (
            <Text>Aucun membre pour ce voyage.</Text>
          ) : (
            members.map((member, index) => (
              <View key={index} style={settingsStyles.row}>
                <Text>{member.name || member.username || member.email}</Text>
                {member.role === 'admin' && (
                  <Text style={settingsStyles.roleTag}>Admin</Text>
                )}
              </View>
            ))
          )}
        </SectionCard>
      </View>
    </View>
  );
};

export default SettingsScreen;