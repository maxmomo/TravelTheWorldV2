import { Stack } from 'expo-router';

export default function AuthLayout() {

  console.log('[LAYOUT AUTH] chargé');
  
  return (
    <Stack
      screenOptions={{
        animation: 'fade',
        headerShown: false,
      }}
    />
  );
}