import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from '@/components/common/Header/Header';
import { COLORS } from '@/src/styles/colors';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header title="Perfil" />
      </View>
      <View style={styles.content}>
        <Ionicons name="person-outline" size={64} color={COLORS.primaryBlue} />
        <Text style={styles.title}>Mi Perfil</Text>
        <Text style={styles.subtitle}>Sincronizá tus datos, cambiá preferencias y personalizá tu viaje por Argentina.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});
