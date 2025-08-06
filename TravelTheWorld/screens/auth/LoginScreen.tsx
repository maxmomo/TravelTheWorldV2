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
import { loginUser } from '@/api/auth';

{/* === UTILS === */ }
import { isValidEmail } from '@/utils/isValidEmail';

{/* === TYPES === */ }
import { LoginPayload, LoginResponse } from '@/types/auth.types';

{/* === CONTEXT === */ }
import { useAuth } from '@/context/AuthContext';

{/* === TRADUCTION === */ }
import { useTranslation } from 'react-i18next';
import { validateLoginInputs } from '@/utils/validation';


// ===========================================
// =============== LOGIN SCREEN ==============
// ===========================================

const LoginScreen = () => {

  // === Traduction ===
  const { t } = useTranslation();

  // === Navigation ===
  const router = useRouter();

  // === Hooks ===
  const { login } = useAuth();

  // === États ===
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // === Fonction de connexion utilisateur ===
  const handleLogin = async () => {

    const validationError = validateLoginInputs(email, password, t);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {

      const payload: LoginPayload = { email, password };
      setError('');
      const response: LoginResponse = await loginUser(payload, t);
      const { user, token } = response;

      if (token) {
        await AsyncStorage.setItem('userToken', token);
      }

      await login(user);
      router.replace('/trips');

    } catch (err: any) {
      setError(err.message || t('error.global.unknown'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper>

      <Text style={textStyles.title}>{t('login.title')}</Text>
      <Text style={textStyles.subtitle2}>{t('login.subtitle')}</Text>

      {error ? <Text style={textStyles.error}>{error}</Text> : null}

      <Input placeholder={t('login.emailPlaceholder')} value={email} onChangeText={setEmail} />
      <Input placeholder={t('login.passwordPlaceholder')} secureTextEntry value={password} onChangeText={setPassword} />

      <PrimaryButton title={loading ? t('global.loading') : t('login.loginButton')} onPress={handleLogin} disabled={loading} />

      <Link title={t('login.signupLink')} onPress={() => router.push('/auth/signin')} />

    </AuthWrapper>
  );
};

export default LoginScreen;