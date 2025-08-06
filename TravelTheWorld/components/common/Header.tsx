import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '@/constants/Colors';
import { METRICS } from '@/constants/metrics';

type Props = {
  onBackPress?: () => void;
  disabledBack?: boolean;
};

const VisualHeader = ({ onBackPress, disabledBack }: Props) => {
  const router = useRouter();
  const showBackButton = router.canGoBack();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        {showBackButton && !disabledBack && (
          <Pressable style={styles.backButton} onPress={onBackPress ?? router.back}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
        )}

        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default VisualHeader;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.primary,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: COLORS.primary,
  },
  backButton: {
    position: 'absolute',
    left: METRICS.spacing,
    top: 18,
    zIndex: 2,
  },
  logo: {
    width: METRICS.screenWidth * 0.35,
    height: 40,
  },
});
