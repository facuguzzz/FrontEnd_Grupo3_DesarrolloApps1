import { Header } from '@/components/Header';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const COLORS = {
  primary: '#2F4FCD',
  danger: '#C0392B',
  bg: '#F4F5F7',
  card: '#FFFFFF',
  text: '#1A1A2E',
  gray: '#8A8A9E',
  border: '#E2E4EA',
};

export default function PerfilScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20 }}>
        <Header title="Perfil" />
      </View>

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
    backgroundColor: COLORS.bg,
  },
  scroll: {
    padding: 20,
    paddingBottom: 40,
  },
  avatarCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
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
    color: COLORS.primary,
  },
  nombre: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  email: {
    fontSize: 13,
    color: COLORS.gray,
    marginTop: 4,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.gray,
    marginTop: 16,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  optionRow: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  optionText: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: '500',
  },
  optionSub: {
    fontSize: 12,
    color: COLORS.gray,
    marginTop: 2,
  },
  chevron: {
    fontSize: 22,
    color: COLORS.gray,
  },
  logoutBtn: {
    borderWidth: 1.5,
    borderColor: COLORS.danger,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  logoutText: {
    color: COLORS.danger,
    fontWeight: '700',
    fontSize: 15,
  },
});
