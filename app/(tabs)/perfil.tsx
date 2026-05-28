import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '@/components/common/Header/Header';
import { colors } from '@/constants/colors';

export default function PerfilScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header title="Perfil" />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.avatarCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>MR</Text>
          </View>
          <Text style={styles.nombre}>Mateo Rossi</Text>
          <Text style={styles.email}>mateo.explorador@ejemplo.com</Text>
        </View>

        <Text style={styles.sectionLabel}>SEGURIDAD Y CUENTA</Text>

        <TouchableOpacity
          style={styles.optionRow}
          onPress={() => router.push('/perfilApp/editar-usuario')}
        >
          <Text style={styles.optionText}>👤  Editar Usuario</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionRow}
          onPress={() => router.push('/perfilApp/cambiar-contrasena')}
        >
          <Text style={styles.optionText}>🔒  Cambiar Contraseña</Text>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutBtn}>
          <Text style={styles.logoutText}>⏻  Cerrar Sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  avatarCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#D6E0F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarInitials: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
  },
  nombre: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  email: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 4,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textSecondary,
    marginTop: 16,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  optionRow: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  optionText: {
    fontSize: 15,
    color: colors.text,
    fontWeight: '500',
  },
  optionSub: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  chevron: {
    fontSize: 22,
    color: colors.textSecondary,
  },
  logoutBtn: {
    borderWidth: 1.5,
    borderColor: colors.danger,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  logoutText: {
    color: colors.danger,
  }
})
