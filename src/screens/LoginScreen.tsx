import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import { useRouter } from 'expo-router';
import { COLORS } from '../styles/colors';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { BottomSheet } from '../components/BottomSheet';
import { HeaderLogo } from '../components/HeaderLogo';

export const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Por favor completa todos los campos',
      });
      return;
    }
    // Mock login success
    Toast.show({
      type: 'success',
      text1: 'Éxito',
      text2: 'Inicio de sesión correcto',
    });

    // Redirect to main tabs group in Expo Router
    setTimeout(() => {
      router.replace('/(tabs)');
    }, 1000);
  };

  return (
    <LinearGradient colors={[COLORS.gradientStart, COLORS.gradientEnd]} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.topSection}>
            <HeaderLogo 
              title="TuristeAR" 
              subtitle="Planificá tu próxima aventura por Argentina de manera simple y sin fricciones." 
            />
          </View>

          <BottomSheet>
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Comienza tu viaje</Text>
              <Text style={styles.sheetSubtitle}>Ingresá para sincronizar tus itinerarios y descubrir lugares únicos.</Text>
            </View>
            
            <CustomInput
              iconName="mail-outline"
              placeholder="Tu@correo.com"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            
            <CustomInput
              iconName="key-outline"
              placeholder="********"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <CustomButton title="Continuar" showArrow onPress={handleLogin} style={styles.buttonSpacing} />

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>¿No tenés cuenta? </Text>
              <TouchableOpacity onPress={() => router.push('/register1')}>
                <Text style={styles.registerLink}>Crear cuenta</Text>
              </TouchableOpacity>
            </View>
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
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  registerText: {
    color: COLORS.textLight,
    fontSize: 14,
  },
  registerLink: {
    color: COLORS.linkText,
    fontSize: 14,
    fontWeight: '600',
  },
});
