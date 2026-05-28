import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors } from '../../../../constants/colors';
import { icons } from '../../../../constants/icons';
import { styles } from './ActivityCard.styles';

export interface ActivityCardProps {
  /** The time of the activity (e.g., '09:00') */
  time: string;
  /** The title of the activity */
  title: string;
  /** Description of the activity */
  description: string;
  /** Location/Address of the activity */
  location: string;
  /** Callback triggered when the edit button is pressed */
  onEditPress?: () => void;
  /** Callback triggered when the delete button is pressed */
  onDeletePress?: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  time,
  title,
  description,
  location,
  onEditPress,
  onDeletePress,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.timeText}>{time}</Text>

      <View style={styles.bottomInfoRow}>
        <View style={styles.detailsColumn}>
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.descriptionText} numberOfLines={1}>
            {description}
          </Text>
          <View style={styles.locationRow}>
            <MaterialIcons
              name={icons.Location}
              size={12}
              color={colors.textSecondary}
            />
            <Text style={styles.locationText} numberOfLines={1}>
              {location}
            </Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <Pressable
            onPress={onEditPress}
            style={({ pressed }) => [
              styles.actionButton,
              styles.editButton,
              pressed && styles.pressedState
            ]}
            accessibilityRole="button"
            accessibilityLabel="Editar actividad"
          >
            <MaterialIcons
              name={icons.Edit}
              size={20}
              color={colors.primary}
            />
          </Pressable>

          <Pressable
            onPress={onDeletePress}
            style={({ pressed }) => [
              styles.actionButton,
              styles.deleteButton,
              pressed && styles.pressedState
            ]}
            accessibilityRole="button"
            accessibilityLabel="Eliminar actividad"
          >
            <MaterialIcons
              name={icons.Delete}
              size={20}
              color={colors.danger}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
