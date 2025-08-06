import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from '@/components/common/PrimaryButton';
import { StepProps } from '@/types/planning.type';
import { createtripStyles } from '@/styles/screens/createtrip.style';
import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';
import { uploadDocument } from '@/api/document';
import { useTranslation } from 'react-i18next';

const Step5_documents = ({ data, onNext, onBack, loading }: StepProps) => {
  const { t } = useTranslation();

  const [documents, setDocuments] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [fileName, setFileName] = useState('');
  const [pendingFile, setPendingFile] = useState<any | null>(null);
  const [previewUri, setPreviewUri] = useState<string | null>(null);

  const handleFilePick = async (fromCamera = false) => {
    const pickFn = fromCamera ? ImagePicker.launchCameraAsync : ImagePicker.launchImageLibraryAsync;
    const result = await pickFn({ quality: 0.7, mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled && result.assets.length > 0) {
      const asset = result.assets[0];
      setPendingFile({ uri: asset.uri, name: asset.fileName || 'image.jpg', type: 'image' });
      setFileName(asset.fileName || '');
      setModalVisible(true);
    }
  };

  const confirmFile = () => {
    if (!pendingFile) return;
    setDocuments((prev) => [...prev, { ...pendingFile, name: fileName || pendingFile.name }]);
    setPendingFile(null);
    setFileName('');
    setModalVisible(false);
  };

  const removeDocument = (index: number) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    try {
      for (const doc of documents) {
        await uploadDocument({ planningId: data.id, file: doc });
      }
      Alert.alert(t('global.success'), t('plannings.documentsUploaded'));
      onNext();
    } catch (err) {
      Alert.alert(t('error.error'), t('plannings.uploadError'));
      console.error(err);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>

          {/* Boutons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: METRICS.spacing }}>
            <PrimaryButton title="🖼 Galerie" onPress={() => handleFilePick(false)} half />
            <PrimaryButton title="📷 Caméra" onPress={() => handleFilePick(true)} half />
          </View>

          {/* Liste */}
          <FlatList
            data={documents}
            keyExtractor={(_, i) => i.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => setPreviewUri(item.uri)} style={{ marginHorizontal: 10 }}>
                <Image source={{ uri: item.uri }} style={{ width: 250, height: 200, borderRadius: 8 }} />
                <Text numberOfLines={1}>{item.name}</Text>
                <TouchableOpacity onPress={() => removeDocument(index)} style={{ position: 'absolute', top: 4, right: 4 }}>
                  <Ionicons name="close-circle" size={22} color={COLORS.red} />
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />

          {/* Boutons de navigation */}
          <View style={createtripStyles.buttonRow}>
            {onBack && <PrimaryButton title={t('global.return')} onPress={onBack} half />}
            <PrimaryButton title={t('global.continue')} onPress={handleUpload} half disabled={loading} />
          </View>

          {/* Modal nom de fichier */}
          <Modal visible={modalVisible} transparent animationType="fade">
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ width: '85%', backgroundColor: 'white', borderRadius: 10, padding: 20 }}>
                <Text style={{ marginBottom: 10 }}>{t('plannings.documentName')}</Text>
                <TextInput
                  value={fileName}
                  onChangeText={setFileName}
                  placeholder="Ex: Réservation Hôtel"
                  style={{ borderWidth: 1, borderColor: COLORS.black, borderRadius: 6, padding: 10, marginBottom: 12 }}
                />
                <PrimaryButton title={t('global.add')} onPress={confirmFile} />
              </View>
            </View>
          </Modal>

          {/* Modal image plein écran */}
          <Modal visible={!!previewUri} transparent animationType="fade">
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.9)', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => setPreviewUri(null)}
            >
              <Image
                source={{ uri: previewUri! }}
                style={{ width: METRICS.screenWidth * 0.9, height: METRICS.screenHeight * 0.9, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </Modal>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Step5_documents;
