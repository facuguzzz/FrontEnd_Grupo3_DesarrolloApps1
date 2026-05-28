import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import { paddings } from '@/constants/paddings';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityCard } from '../../components/Explorar/Card-Actividades';
import { CardItinerarioInfoFav } from '../../components/Favoritos/Card-Itinerario-Info-Fav';
import { Header } from '../../components/Header';

export default function FavoriteItineraryInfoScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            {/* Header */}
            <View style={{ paddingHorizontal: paddings.spacing.xl }}>
                <Header title="Favoritos" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Card de la Imagen Principal */}
                <CardItinerarioInfoFav onBackPress={() => router.back()} />

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
