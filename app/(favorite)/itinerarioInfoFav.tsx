import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../../components/common/Header/Header';
import { CardItinerarioInfoFav } from '../../components/favorites_components/Card-Itinerario-Info-Fav';
import { ActivityCard } from '../../components/common/ActivityCard/ActivityCard';
import { styles } from './itinerarioInfoFav.styles';

export default function FavoriteItineraryInfoScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Stack.Screen options={{ headerShown: false }} />

            <Header
                title="Favoritos"
                onThemeTogglePress={() => {}}
                onAvatarPress={() => {}}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                <CardItinerarioInfoFav 
                    onBackPress={() => router.back()} 
                    onEditPress={() => router.push('/edicionItinerario')} 
                />

                <View style={styles.dayCard}>
                    <Text style={styles.dayTitle}>Día 1</Text>

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

                <View style={[styles.dayCard, styles.lastDayCard]}>
                    <Text style={styles.dayTitle}>Día 2</Text>

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
