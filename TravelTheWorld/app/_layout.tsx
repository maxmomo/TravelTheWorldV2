import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Slot } from 'expo-router';
import { AuthProvider } from '@/context/AuthContext';
import '@/i18n';
export default function RootLayout() {
  console.log('[ROOT] monté');
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
      <Slot />

      </AuthProvider>
    </GestureHandlerRootView>
  );
}
