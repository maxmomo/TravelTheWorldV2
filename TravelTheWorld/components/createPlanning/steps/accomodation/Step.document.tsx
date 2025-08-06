import React, { useState } from 'react';
import {
  View, Text, Modal, TextInput, Image, TouchableOpacity,
  KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, FlatList
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import PrimaryButton from '@/components/common/PrimaryButton';
import { StepProps, DocumentUpload } from '@/types/planning.type';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { createtripStyles } from '@/styles/screens/createtrip.style';

const Step_document = ({
  data,
  onNext,
  onBack,
  onChange,
  loading,
  pendingDocuments = [],
  setPendingDocuments = () => { },
}: StepProps) => {
  const { t } = useTranslation();

  const [previewUri, setPreviewUri] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [fileName, setFileName] = useState('');
  const [pendingUri, setPendingUri] = useState<string | null>(null);

  const isValid =
    !!data.title?.trim() &&
    data.startDate !== null &&
    data.endDate !== null &&
    new Date(data.endDate) >= new Date(data.startDate);

  const pickImage = async (fromCamera: boolean) => {
    const result = fromCamera
      ? await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      })
      : await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });

    if (!result.canceled) {
      setPendingUri(result.assets[0].uri);
      setModalVisible(true);
    }
  };

  const confirmAdd = () => {
    if (!fileName.trim() || !pendingUri) return;
    const validDocs = Array.isArray(pendingDocuments) ? pendingDocuments : [];
    const updated = [...validDocs, { uri: pendingUri, name: fileName.trim() }];
    setPendingDocuments(updated);
    setFileName('');
    setPendingUri(null);
    setModalVisible(false);
  };

  const removeDocument = (index: number) => {
    const newDocs = [...pendingDocuments];
    newDocs.splice(index, 1);
    setPendingDocuments(newDocs);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View style={createtripStyles.content}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: METRICS.spacing }}>
              <PrimaryButton title="🖼 Galerie" onPress={() => pickImage(false)} half />
              <PrimaryButton title="📷 Caméra" onPress={() => pickImage(true)} half />
            </View>

            <FlatList
              data={pendingDocuments}
              keyExtractor={(_, i) => i.toString()}
              horizontal
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => setPreviewUri(item.uri)} style={{ marginHorizontal: 10 }}>
                  <Image source={{ uri: item.uri }} style={{ width: 250, height: 200, borderRadius: 8 }} />
                  <Text numberOfLines={1} style={{ width: 250 }}>{item.name}</Text>
                  <TouchableOpacity onPress={() => removeDocument(index)} style={{ position: 'absolute', top: 4, right: 4 }}>
                    <Ionicons name="close-circle" size={22} color={COLORS.red} />
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
            />

            <View style={createtripStyles.buttonRow}>
              {onBack && <PrimaryButton title={t('global.return')} onPress={onBack} half />}
              <PrimaryButton title={t('global.continue')} onPress={() => onNext()} half disabled={loading || !isValid} />
            </View>
          </View>

          {/* 🎯 Modal nom de fichier */}
          <Modal visible={modalVisible} transparent animationType="fade">
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: '85%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                <Text style={{ marginBottom: 10 }}>{t('plannings.documentName')}</Text>
                <TextInput
                  value={fileName}
                  onChangeText={setFileName}
                  placeholder="Ex: Réservation Hôtel"
                  style={{
                    borderWidth: 1,
                    borderColor: COLORS.black,
                    borderRadius: 6,
                    padding: 10,
                    marginBottom: 12,
                  }}
                />
                <PrimaryButton title={t('global.add')} onPress={confirmAdd} />
              </View>
            </View>
          </Modal>

          {/* 🔍 Modal preview image */}
          <Modal visible={!!previewUri} transparent animationType="fade">
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => setPreviewUri(null)}
            >
              <Image
                source={{ uri: previewUri! }}
                style={{
                  width: METRICS.screenWidth * 0.9,
                  height: METRICS.screenHeight * 0.9,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Step_document;
