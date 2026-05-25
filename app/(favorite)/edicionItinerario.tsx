import React, { useState } from 'react';
import { Alert, ScrollView, StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import { colors } from '../../constants/colors';
import { ActivityCard } from '../../components/favorites_components/itinerary_edit/components/ActivityCard/ActivityCard';
import { Button } from '../../components/favorites_components/itinerary_edit/components/Button/Button';
import { EditModal } from '../../components/favorites_components/itinerary_edit/components/EditModal/EditModal';
import { Header } from '../../components/common/Header/Header';
import { InputTitulo } from '../../components/favorites_components/itinerary_edit/components/InputTittle/InputTitulo';
import { styles } from './edicionItinerario.styles';

// Mock de datos
const INITIAL_ACTIVITIES = [
  {
    id: 'act-1',
    day: 1,
    time: '09:00',
    title: 'Trekking Glaciar Perito Moreno',
    description: 'Caminata sobre el hielo con grampones.',
    location: 'Parque Nacional Los Glaciares',
  },
  {
    id: 'act-2',
    day: 1,
    time: '13:30',
    title: 'Almuerzo en Refugio',
    description: 'Comida típica patagónica con vista al glaciar.',
    location: 'Refugio Perito Moreno',
  },
  {
    id: 'act-3',
    day: 1,
    time: '16:00',
    title: 'Navegación Safari Náutico',
    description: 'Paseo en barco frente a la pared del glaciar.',
    location: 'Puerto Bajo las Sombras',
  },
  {
    id: 'act-4',
    day: 2,
    time: '10:00',
    title: 'Sendero Laguna de los Tres',
    description: 'Caminata exigente con vistas al cerro Fitz Roy.',
    location: 'El Chaltén',
  },
  {
    id: 'act-5',
    day: 2,
    time: '14:00',
    title: 'Pícnic en Laguna Capri',
    description: 'Descanso y almuerzo frente al Fitz Roy.',
    location: 'Laguna Capri',
  },
  {
    id: 'act-6',
    day: 2,
    time: '18:00',
    title: 'Cena en La Cervecería',
    description: 'Cerveza artesanal y comida patagónica.',
    location: 'El Chaltén Centro',
  },
];

export default function EdicionItinerarioScreen() {
  const [title, setTitle] = useState('Explorando la Patagonia');
  const [activities, setActivities] = useState(INITIAL_ACTIVITIES);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  // Edit Modal State
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editingActivity, setEditingActivity] = useState<{ id: string; title: string } | null>(null);

  const handleEditActivity = (id: string, currentTitle: string) => {
    setEditingActivity({ id, title: currentTitle });
    setIsEditModalVisible(true);
  };

  const handleSaveActivityTitle = (newTitle: string) => {
    if (editingActivity) {
      setActivities((prev) =>
        prev.map((act) => (act.id === editingActivity.id ? { ...act, title: newTitle } : act))
      );
    }
    setIsEditModalVisible(false);
    setEditingActivity(null);
  };

  const handleDeleteActivity = (id: string, activityTitle: string) => {
    Alert.alert(
      'Eliminar Actividad',
      `¿Estás seguro de que deseas eliminar la actividad "${activityTitle}"?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            setActivities((prev) => prev.filter((act) => act.id !== id));
          },
        },
      ]
    );
  };

  const handleSaveChanges = () => {
    Alert.alert(
      'Cambios Guardados',
      `El itinerario "${title}" con ${activities.length} actividades ha sido guardado con éxito.`,
      [{ text: 'Aceptar', onPress: () => router.back() }]
    );
  };

  // Group activities by day
  const days = Array.from(new Set(activities.map((act) => act.day))).sort((a, b) => a - b);

  return (
    <View style={[styles.container, { paddingTop: insets.top, backgroundColor: colors.background }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      <Header
        title="Editar Itinerario"
        showBackButton={true}
        onBackPress={() => router.back()}
        onThemeTogglePress={() => Alert.alert('Tema', 'Cambio de tema no implementado.')}
        onAvatarPress={() => Alert.alert('Perfil', 'Navegación al perfil de usuario.')}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleInputWrapper}>
          <InputTitulo value={title} onChangeText={setTitle} />
        </View>

        {days.map((dayNum) => {
          const dayActivities = activities.filter((act) => act.day === dayNum);

          return (
            <View key={`day-${dayNum}`} style={styles.daySection}>
              <Text style={styles.dayTitle}>{`Día ${dayNum}`}</Text>
              <View style={styles.activityList}>
                {dayActivities.map((activity) => (
                  <ActivityCard
                    key={activity.id}
                    time={activity.time}
                    title={activity.title}
                    description={activity.description}
                    location={activity.location}
                    onEditPress={() => handleEditActivity(activity.id, activity.title)}
                    onDeletePress={() => handleDeleteActivity(activity.id, activity.title)}
                  />
                ))}
              </View>
            </View>
          );
        })}

        {activities.length === 0 && (
          <View style={{ padding: 40, alignItems: 'center' }}>
            <Text style={{ color: colors.textSecondary, fontFamily: 'Inter_400Regular' }}>
              No hay actividades en este itinerario.
            </Text>
          </View>
        )}

        <View style={styles.buttonWrapper}>
          <Button label="Guardar cambios" onPress={handleSaveChanges} />
        </View>
      </ScrollView>

      <EditModal
        visible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        onSave={handleSaveActivityTitle}
        initialValue={editingActivity?.title || ''}
      />
    </View>
  );
}
