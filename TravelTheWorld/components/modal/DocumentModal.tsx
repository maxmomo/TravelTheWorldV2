import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Alert,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '@/constants/Colors';
import PrimaryButton from '@/components/common/PrimaryButton';

export type DocumentItem = {
  id: number;
  filename: string;
  url: string;
};

type Props = {
  visible: boolean;
  documents: DocumentItem[];
  onClose: () => void;
};

const DocumentModal = ({ visible, documents, onClose }: Props) => {
  const [adding, setAdding] = useState(false);
  const [fileName, setFileName] = useState('');
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleAddDocument = () => {
    if (!fileName.trim()) return;
    console.log('📤 Ajouter document :', fileName);
    setFileName('');
    setAdding(false);
  };

  const handleDelete = (doc: DocumentItem) => {
    console.log('🗑 Supprimer document :', doc);
  };

  const handleOpen = async (doc: DocumentItem) => {
  try {
    setLoadingId(doc.id);
    const supported = await Linking.canOpenURL(doc.url);

    if (!supported) {
      Alert.alert("Erreur", "Impossible d'ouvrir ce document.");
      return;
    }

    await Linking.openURL(doc.url);
  } catch (err) {
    console.error("Erreur ouverture document :", err);
    Alert.alert("Erreur", "Impossible d’ouvrir le document.");
  } finally {
    setLoadingId(null);
  }
};

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            maxHeight: '80%',
            borderRadius: 16,
            padding: 20,
          }}
        >
          {/* Header */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>📎 Documents</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} />
            </TouchableOpacity>
          </View>

          {/* Liste */}
          <FlatList
            data={documents}
            keyExtractor={(item) => item.id.toString()}
            style={{ marginTop: 16 }}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: COLORS.primary + '10',
                  borderRadius: 10,
                  padding: 12,
                  marginBottom: 12,
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', flex: 1 }}>{item.filename}</Text>
                  <TouchableOpacity onPress={() => handleDelete(item)}>
                    <Ionicons name="trash" size={20} color={COLORS.red} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  onPress={() => handleOpen(item)}
                  style={{
                    marginTop: 8,
                    backgroundColor: COLORS.primary,
                    paddingVertical: 8,
                    paddingHorizontal: 14,
                    borderRadius: 8,
                    alignSelf: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  {loadingId === item.id ? (
                    <ActivityIndicator color="white" />
                  ) : (
                    <>
                      <Ionicons name="download-outline" size={18} color="white" />
                      <Text style={{ color: 'white' }}>Ouvrir</Text>
                    </>
                  )}
                </TouchableOpacity>
              </View>
            )}
          />

          {/* Ajouter un document */}
          {!adding ? (
            <PrimaryButton
              title="➕ Ajouter un document"
              onPress={() => setAdding(true)}
            />
          ) : (
            <View style={{ marginTop: 16 }}>
              <Text style={{ marginBottom: 6 }}>Nom du document :</Text>
              <TextInput
                placeholder="Ex : Réservation Hôtel"
                value={fileName}
                onChangeText={setFileName}
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 8,
                  padding: 10,
                  marginBottom: 12,
                }}
              />
              <PrimaryButton title="📤 Ajouter" onPress={handleAddDocument} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DocumentModal;
