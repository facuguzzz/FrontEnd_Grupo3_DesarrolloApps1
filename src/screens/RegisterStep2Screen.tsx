import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { COLORS } from '../styles/colors';
import { CustomInput } from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { BottomSheet } from '../../components/BottomSheet';
import { HeaderLogo } from '../../components/HeaderLogo';

export const RegisterStep2Screen: React.FC = () => {
  const router = useRouter();
  const { name } = useLocalSearchParams<{ name: string }>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!password || !confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Por favor completa todos los campos',
      });
      return;
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Las contraseñas no coinciden',
      });
      return;
    }

    if (password.length < 6) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'La contraseña debe tener al menos 6 caracteres',
      });
      return;
    }

    Toast.show({
      type: 'success',
      text1: '¡Registro exitoso!',
      text2: `Bienvenido, ${name || ''}`,
    });

    setTimeout(() => {
      router.replace('/login');
    }, 1000);
  };

  return (
    <LinearGradient colors={[COLORS.gradientStart, COLORS.gradientEnd]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardView}
        >
          <View style={styles.topSection}>
            <HeaderLogo 
              title="TuristeAR" 
              subtitle="¡Regístrate en segundos y comienza a planificar! Tu próxima aventura te espera." 
            />
          </View>

          <BottomSheet>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Comienza tu viaje</Text>
              <Text style={styles.sheetSubtitle}>Ingresá para sincronizar tus itinerarios y descubrir lugares únicos.</Text>
            </View>
            
            <CustomInput
              iconName="key-outline"
              placeholder="Contraseña"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <CustomInput
              iconName="key-outline"
              placeholder="Confirmar contraseña"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            
            <CustomButton title="Ingresar" showArrow onPress={handleRegister} style={styles.buttonSpacing} />
          </BottomSheet>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
  },
  sheetHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sheetTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textDark,
    marginBottom: 8,
  },
  sheetSubtitle: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonSpacing: {
    marginTop: 20,
  },
});
