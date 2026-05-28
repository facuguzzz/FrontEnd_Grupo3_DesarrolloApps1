import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../styles/colors';
import { HeaderLogo } from '../../components/HeaderLogo';

// La navegación inicial (a /login o /(tabs)) la decide el guard del layout
// según haya o no sesión guardada. Esta pantalla solo muestra el branding.
export const SplashScreen: React.FC = () => {
  return (
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientEnd]}
      style={styles.container}
    >
      <HeaderLogo largeLogo />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
