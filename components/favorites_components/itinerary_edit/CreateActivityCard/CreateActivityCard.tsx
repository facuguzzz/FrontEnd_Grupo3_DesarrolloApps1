import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './CreateActivityCard.styles';

export interface CreateActivityCardProps {
  /** Callback triggered when the card is pressed to create/add a new activity */
  onPress: () => void;
}

export const CreateActivityCard: React.FC<CreateActivityCardProps> = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && styles.pressedState
      ]}
      accessibilityRole="button"
      accessibilityLabel="Agregar nueva actividad"
    >
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Agregar actividad +</Text>
      </View>
    </Pressable>
  );
};
