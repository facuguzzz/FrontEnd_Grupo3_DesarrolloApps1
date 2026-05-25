import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Header } from '../../components/common/Header/Header';
import { CardItinerarioInfoFav } from '../../components/favorites_components/Card-Itinerario-Info-Fav';
import { CardActividad } from '../../components/common/ActivityCard/ActivityCard';
import { styles } from './itinerarioInfoFav.styles';

export default function itinerarioInfoFav() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.headerContainer}>
                <Header title="Explorar" />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                <CardItinerarioInfoFav 
                    onBackPress={() => router.back()} 
                    onEditPress={() => router.push('/edicionItinerario')} 
                />

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

                <View style={[styles.dayCard, styles.lastDayCard]}>
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
