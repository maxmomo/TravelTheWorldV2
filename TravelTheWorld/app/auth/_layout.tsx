import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        presentation: 'modal',
        animation: 'fade',
        headerShown: false,
      }}
    />
  );
}