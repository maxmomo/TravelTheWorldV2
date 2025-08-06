import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal, Pressable, TextInput, ScrollView } from 'react-native';

{/* === COMPOSANT === */ }
import PrimaryButton from '../common/PrimaryButton';

{/* === TYPES === */ }
import { CountrySelectorProps } from '@/types/components/form.types';

{/* === STYLES === */ }
import { countrySelectorStyles as styles } from '@/styles/components/countrySelector.style';
import { COLORS } from '@/constants/Colors';

{/* === DATA === */ }
import countries from '@/data/countries';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';

// ===========================================
// ====== COUNTRY SELECTOR COMPONENT =========
// ===========================================

const CountrySelector = ({ selectedCountries, onChange }: CountrySelectorProps) => {

    // === 🌍 Traduction ===
    const { t } = useTranslation();

    // === 🧠 États ===
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState('');

    // ===========================================
    // =============== FONCTIONS =================
    // ===========================================

    const addCountry = (countryCode: string) => {
        if (!selectedCountries.includes(countryCode)) {
            onChange([...selectedCountries, countryCode]);
        }
        setModalVisible(false);
        setSearch('');
    };

    const removeCountry = (countryCode: string) => {
        onChange(selectedCountries.filter((c) => c !== countryCode));
    };

    const getFlagEmoji = (countryCode: string) => {
        return countryCode
            .toUpperCase()
            .replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt(0)));
    };

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
    );

    // ===========================================
    // ================ AFFICHAGE ================
    // ===========================================
    
    return (
        <View style={styles.container}>

            <Text style={styles.label}>{t('components.countrySelector.label')}</Text>

            <PrimaryButton
                title={t('components.countrySelector.addCountry')}
                onPress={() => setModalVisible(true)} style={styles.selectButton}
            />

            <View style={styles.selectedWrapper}>
                <ScrollView
                    style={styles.selectedScroll}
                    contentContainerStyle={[styles.selectedContainer]}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled
                >
                    {selectedCountries.map((code) => (
                        <TouchableOpacity
                            key={code}
                            onLongPress={() => removeCountry(code)}
                            style={styles.flagItem}
                        >
                            <Text style={styles.flag}>{getFlagEmoji(code)}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </View>

            <Modal transparent visible={modalVisible} animationType="fade">
                <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{t('components.countrySelector.chooseCountry')}</Text>

                        <TextInput
                            style={styles.searchInput}
                            value={search}
                            onChangeText={setSearch}
                            placeholder={t('components.countrySelector.searchCountry')}
                            placeholderTextColor={COLORS.inputPlaceholder}
                        />

                        <FlatList
                            data={filteredCountries}
                            keyExtractor={(item) => item.code}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => addCountry(item.code)} style={styles.countryOption}>
                                    <Text style={styles.flag}>{getFlagEmoji(item.code)}</Text>
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
};

export default CountrySelector;
