import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../src/styles/colors';
import BrandIcon from '../assets/images/icono.svg';

interface HeaderLogoProps {
  title?: string;
  subtitle?: string;
  largeLogo?: boolean;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ title, subtitle, largeLogo = false }) => {
  if (largeLogo) {
    return (
      <View style={styles.container}>
        <BrandIcon 
          width={180} 
          height={180} 
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoIconContainer}>
        <BrandIcon 
          width={54} 
          height={54} 
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
