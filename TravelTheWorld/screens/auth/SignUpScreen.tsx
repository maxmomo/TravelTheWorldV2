import React, { useState } from 'react';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

{/* === COMPOSANTS === */ }
import AuthWrapper from '@/components/auth/AuthWrapper';
import Input from '@/components/common/Input';
import Link from '@/components/common/Link';
import PrimaryButton from '@/components/common/PrimaryButton';

{/* === STYLE === */ }
import { textStyles } from '@/styles/common/text.style';

{/* === API === */ }
import { registerUser } from '@/api/auth';

{/* === UTILS === */ }
import { isValidEmail } from '@/utils/isValidEmail';

{/* === TYPES === */ }
import { RegisterPayload, RegisterResponse } from '@/types/auth.types';

{/* === CONTEXT === */ }
import { useAuth } from '@/context/AuthContext';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';
import { validateSignupInputs } from '@/utils/validation';

// ===========================================
// =============== SIGNUP SCREEN =============
// ===========================================

const SignUpScreen = () => {

  // === Traduction ===
  const { t } = useTranslation();

  // === Navigation ===
  const router = useRouter();

  // === Hooks ===
  const { login } = useAuth();

  // === États ===
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // === Fonction création de compte utilisateur ===
  const handleRegister = async () => {

    const validationError = validateSignupInputs(username, email, password, t);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {

      const payload: RegisterPayload = { username, email, password };
      setError('');
      const response: RegisterResponse = await registerUser(payload, t);
      const { user, token } = response;

      if (token) {
        await AsyncStorage.setItem('userToken', token);
      }

      await login(user);
      router.replace('/trips');

    } catch (err: any) {
      setError(err?.message || t('error.global.unknown'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper>

        <Text style={textStyles.title}>{t('signin.title')}</Text>
        <Text style={textStyles.subtitle2}>{t('signin.subtitle')}</Text>

        {error ? <Text style={textStyles.error}>{error}</Text> : null}

        <Input placeholder={t('signin.usernamePlaceholder')} value={username} onChangeText={setUsername} />
        <Input placeholder={t('signin.emailPlaceholder')} value={email} onChangeText={setEmail} />
        <Input placeholder={t('signin.passwordPlaceholder')} secureTextEntry value={password} onChangeText={setPassword} />

        <PrimaryButton title={loading ? t('global.loading') : t('signin.signinButton')} onPress={handleRegister} disabled={loading} />

        <Link title={t('signin.connectLink')} onPress={() => router.back()} />

    </AuthWrapper>
  );
};

export default SignUpScreen;