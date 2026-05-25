import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import { Header } from '../../components/common/Header/Header';
import { ItineraryCard } from '../../components/favorites_components/favorite_principal/components/ItineraryCard/ItineraryCard';
import { EmptyState } from '../../components/favorites_components/favorite_principal/components/EmptyState/EmptyState';
import { styles } from './favoritos.styles';
import { colors } from '../../constants/colors';

// Mock data to demonstrate the populated state
const MOCK_ITINERARIES = [
  {
    id: '1',
    title: 'Ruta de los Siete Lagos',
    location: 'Neuquén, Argentina',
    duration: '3 Dias',
    imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isOfflineAvailable: false,
    isFavorite: true,
    isPinned: false,
  },
  {
    id: '2',
    title: 'Fin de Semana en BA',
    location: 'Buenos Aires, Argentina',
    duration: '2 Dias',
    imageUrl: 'https://images.unsplash.com/photo-1612057476007-16016e75d60d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isOfflineAvailable: false,
    isFavorite: true,
    isPinned: true,
  }
];

export default function FavoritosScreen() {
  const [itineraries, setItineraries] = useState(MOCK_ITINERARIES);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleToggleFavorite = (id: string) => {
    setItineraries(prev => 
      prev.map(item => item.id === id ? { ...item, isFavorite: !item.isFavorite } : item)
    );
  };

  const handleTogglePin = (id: string) => {
    setItineraries(prev => 
      prev.map(item => {
        if (item.id === id) {
          return { ...item, isPinned: !item.isPinned };
        } else {
          return { ...item, isPinned: false };
        }
      })
    );
  };

  const handleToggleDownload = (id: string) => {
    setItineraries(prev => 
      prev.map(item => item.id === id ? { ...item, isOfflineAvailable: !item.isOfflineAvailable } : item)
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, backgroundColor: colors.background }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      
      <View style={styles.container}>
        <Header 
          title="Favoritos"
          onThemeTogglePress={() => console.log('Toggle theme')}
          onAvatarPress={() => console.log('Navigate to profile settings')}
        />

        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.pageHeader}>
            <Text style={styles.pageTitle}>Mis Favoritos</Text>
            <Text style={styles.pageSubtitle}>
              Tus itinerarios guardados para futuras aventuras.
            </Text>
          </View>

          {itineraries.length > 0 ? (
            <View style={styles.itinerariesContainer}>
              {itineraries.map(itinerary => (
                <ItineraryCard
                  key={itinerary.id}
                  title={itinerary.title}
                  location={itinerary.location}
                  duration={itinerary.duration}
                  imageUrl={itinerary.imageUrl}
                  isOfflineAvailable={itinerary.isOfflineAvailable}
                  isFavorite={itinerary.isFavorite}
                  isPinned={itinerary.isPinned}
                  onPressDetail={() => router.push('/itinerarioInfoFav')}
                  onFavoriteToggle={() => handleToggleFavorite(itinerary.id)}
                  onPinPress={() => handleTogglePin(itinerary.id)}
                  onDownloadPress={() => handleToggleDownload(itinerary.id)}
                />
              ))}
              
              {/* Demonstration EmptyState at the bottom */}
              <View style={styles.emptyStateDemoContainer}>
                <EmptyState 
                  title="Aún no tienes favoritos"
                  description="Explora destinos increíbles y guarda los itinerarios que más te gusten para tenerlos siempre a mano."
                  actionLabel="Ir a Explorar"
                  onActionPress={() => console.log('Navigate to Explore')}
                />
              </View>
            </View>
          ) : (
            <View style={styles.emptyStateContainer}>
              <EmptyState 
                title="Aún no tienes favoritos"
                description="Explora destinos increíbles y guarda los itinerarios que más te gusten para tenerlos siempre a mano."
                actionLabel="Ir a Explorar"
                onActionPress={() => console.log('Navigate to Explore')}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
