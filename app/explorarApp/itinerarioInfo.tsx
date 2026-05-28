import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import { paddings } from '@/constants/paddings';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../../components/common/Header/Header';
import { ItineraryInfoCard } from '../../components/Explorar/Card-Itinerario-Info';
import { ActivityCard } from '../../components/common/ActivityCard/ActivityCard';

export default function ItineraryInfoScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <Header title="Explorar" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Card de la Imagen Principal */}
        <ItineraryInfoCard onBackPress={() => router.back()} />

        {/* Card del Día 1 */}
        <View style={styles.dayCard}>
          <Text style={styles.dayTitle}>Dia 1</Text>

          <ActivityCard
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
          />
          <ActivityCard
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
          />
          <ActivityCard
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
            isLast={true}
          />
        </View>

        {/* Day 2 card */}
        <View style={[styles.dayCard, { marginBottom: paddings.spacing.huge }]}>
          <Text style={styles.dayTitle}>Dia 2</Text>

          <ActivityCard
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
          />
          <ActivityCard
            time="00:00"
            title="Llegada y Check-in"
            subtitle="Restaurante Local"
            location="Ubicacion"
          />
          <ActivityCard
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
    backgroundColor: colors.surfaceNeutral,
  },
  scrollContent: {
    paddingHorizontal: paddings.spacing.xl,
    paddingBottom: paddings.spacing.huge,
  },
  dayCard: {
    backgroundColor: colors.surface,
    borderRadius: paddings.radius.xxl,
    padding: paddings.spacing.xxl,
    marginBottom: paddings.spacing.xl,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  dayTitle: {
    fontSize: fonts.size.xl,
    fontFamily: fonts.family.headingBold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: paddings.spacing.xxl,
  },
});
