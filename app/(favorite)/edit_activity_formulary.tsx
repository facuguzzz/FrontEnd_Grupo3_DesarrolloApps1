import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Alert, ScrollView, StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../../components/common/Header/Header';
import { EditActivityFormulary } from '../../components/favorites_components/edit_actvity_formulary/EditActivityFormulary';
import { colors } from '../../constants/colors';
import { styles } from './edit_activity_formulary.style';

export default function EditActivityFormularyScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{
    id: string;
    day: string;
    time: string;
    title: string;
    description: string;
    location: string;
  }>();

  const initialValues = {
    title: params.title || '',
    description: params.description || '',
    time: params.time || '',
    location: params.location || '',
  };

  const handleSave = (updatedValues: typeof initialValues) => {
    // Navigate back to edicionItinerario, passing the updated values and original day
    router.replace({
      pathname: '/edicionItinerario',
      params: {
        updatedActivityId: params.id,
        updatedTitle: updatedValues.title,
        updatedDescription: updatedValues.description,
        updatedTime: updatedValues.time,
        updatedLocation: updatedValues.location,
        updatedDay: params.day || '1',
      },
    });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <Header
        title="Editar Itinerario"
        showBackButton={false}
        onThemeTogglePress={() => Alert.alert('Tema', 'Cambio de tema no implementado.')}
        onAvatarPress={() => Alert.alert('Perfil', 'Navegación al perfil de usuario.')}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <EditActivityFormulary
          initialValues={initialValues}
          onSave={handleSave}
          onCancel={() => router.back()}
        />
      </ScrollView>
    </View>
  );
}
