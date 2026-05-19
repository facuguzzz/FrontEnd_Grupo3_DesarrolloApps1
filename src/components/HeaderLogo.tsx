import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { COLORS } from '../styles/colors';

interface HeaderLogoProps {
  title?: string;
  subtitle?: string;
  largeLogo?: boolean;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ title, subtitle, largeLogo = false }) => {
  if (largeLogo) {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/images/TuristearLogin.png')} 
          style={styles.largeLogoImage}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoIconContainer}>
        <Image 
          source={require('../../assets/images/TuristearIsotipo_ICON.png')} 
          style={styles.smallLogoImage}
          resizeMode="contain"
        />
      </View>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  logoIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  smallLogoImage: {
    width: 60,
    height: 60,
  },
  largeLogoImage: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 20,
    opacity: 0.9,
  },
});
