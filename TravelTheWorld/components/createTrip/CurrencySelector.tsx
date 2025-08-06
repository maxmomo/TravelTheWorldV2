import React, { useState } from 'react';
import { View, Text, Modal, Pressable, TouchableOpacity, FlatList, TextInput } from 'react-native';

{/* === DATA === */ }
import currencies from '@/data/currencies';

{/* === STYLES === */ }
import { currencySelectorStyles as styles } from '@/styles/components/currencySelector.style';
import { COLORS } from '@/constants/Colors';

{/* === TYPES === */ }
import { CurrencySelectorProps } from '@/types/components/form.types';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

const CurrencySelector = ({ selectedCurrency, onChange, hideLabel = false }: CurrencySelectorProps) => {

  // === 🌍 Traduction ===
  const { t } = useTranslation();

  // === 🧠 États ===
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  // === 📊 Constante ===
  const selected = currencies.find(c => c.code === selectedCurrency);
  const filtered = currencies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  // ===========================================
  // ================ AFFICHAGE ================
  // ===========================================

  return (
    <View style={styles.container}>
      {!hideLabel && <Text style={styles.label}>{t('components.currencySelector.label')}</Text>}

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.selector}
      >
        <Text
          style={[
            styles.selectorText,
            !selected && { color: COLORS.inputPlaceholder }
          ]}
        >
          {selected ? `${selected.symbol} ${selected.name}` : t('components.currencySelector.addCurrency')}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>{t('components.currencySelector.chooseCurrency')}</Text>

            <TextInput
              style={styles.searchInput}
              placeholder={t('components.currencySelector.searchCurrency')}
              placeholderTextColor={COLORS.inputPlaceholder}
              value={search}
              onChangeText={setSearch}
            />

            <FlatList
              data={filtered}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    onChange(item.code);
                    setModalVisible(false);
                    setSearch('');
                  }}
                  style={styles.option}
                >
                  <Text>{`${item.symbol} ${item.name} (${item.code})`}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default CurrencySelector;