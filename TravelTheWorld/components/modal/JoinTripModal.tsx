import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from '@/components/common/PrimaryButton';
import { joinTripModalStyles as styles } from '@/styles/components/modal/joinTripModal.style';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (code: string) => void;
};

const JoinTripModal = ({ visible, onClose, onSubmit }: Props) => {
  const [code, setCode] = useState('');

  const handleConfirm = () => {
    if (!code.trim()) {
      Alert.alert('Erreur', 'Veuillez saisir un code.');
      return;
    }
    onSubmit(code.trim());
    setCode('');

  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>🔑 Rejoindre un voyage</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
          </View>

          {/* Champ de code */}
          <Text style={styles.label}>Code d'invitation :</Text>
          <TextInput
            placeholder="Ex : 4FZ89TTY"
            value={code}
            onChangeText={setCode}
            autoCapitalize="characters"
            maxLength={6}
            style={styles.input}
          />

          {/* Bouton */}
          <PrimaryButton title="🔗 Rejoindre le voyage" onPress={handleConfirm} />
        </View>
      </View>
    </Modal>
  );
};

export default JoinTripModal;
