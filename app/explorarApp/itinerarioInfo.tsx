import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../../components/common/Header/Header';
import { CardItinerarioInfo } from '../../components/Explorar/Card-Itinerario-Info';
import { CardActividad } from '../../components/common/ActivityCard/ActivityCard';

export default function ItinerarioInfo() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <Header title="Explorar" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Card de la Imagen Principal */}
        <CardItinerarioInfo onBackPress={() => router.back()} />

        {/* Card del Día 1 */}
        <View style={styles.dayCard}>
          <Text style={styles.dayTitle}>Día 1</Text>

          <CardActividad
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
          />
          <CardActividad
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
          />
          <CardActividad
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
            isLast={true}
          />
        </View>

        {/* Card del Día 2 */}
        <View style={[styles.dayCard, { marginBottom: 40 }]}>
          <Text style={styles.dayTitle}>Día 2</Text>

          <CardActividad
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
          />
          <CardActividad
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
          />
          <CardActividad
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
            isLast={true}
          />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  dayCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 24,
  },
});
