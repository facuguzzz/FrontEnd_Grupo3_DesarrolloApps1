import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';

interface HeaderLogoProps {
  title?: string;
  subtitle?: string;
  largeLogo?: boolean;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ title, subtitle, largeLogo = false }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.logoIconContainer, largeLogo && styles.logoIconContainerLarge]}>
        <Ionicons name="map" size={largeLogo ? 60 : 40} color={COLORS.primaryBlue} />
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
  logoIconContainerLarge: {
    width: 120,
    height: 120,
    borderRadius: 30,
    marginBottom: 0, // No title/subtitle in splash, so no margin needed
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
