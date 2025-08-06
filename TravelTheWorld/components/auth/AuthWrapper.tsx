import { Image, ImageBackground, KeyboardAvoidingView, Platform, View } from 'react-native';
import { authWrapperStyles } from '@/styles/components/auth/authWrapper.style';
import { ReactNode } from 'react';

{/* === PROPS === */ }
interface Props {
    children: ReactNode;
}

export default function AuthWrapper({ children }: Props) {
    return (
        <ImageBackground
            source={require('@/assets/images/fond.jpg')}
            style={authWrapperStyles.background}
            resizeMode="cover"
        >
            <Image
                source={require('@/assets/images/logo.png')}
                style={authWrapperStyles.logo}
                resizeMode="contain"
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={authWrapperStyles.wrapper}
            >
                <View style={authWrapperStyles.card}>
                    {children}
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}