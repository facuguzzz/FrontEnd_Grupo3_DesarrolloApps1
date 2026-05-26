import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { colors } from '../../../../constants/colors';
import { icons } from '../../../../constants/icons';
import { styles } from './EmptyState.styles';

export interface EmptyStateProps {
  /** The main title for the empty state */
  title: string;
  /** Detailed description explaining the empty state */
  description: string;
  /** Label for the Call-To-Action button */
  actionLabel: string;
  /** Callback triggered when the CTA button is pressed */
  onActionPress: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onActionPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name={icons.Save}
          size={32}
          color={colors.primary}
        />
      </View>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Pressable
        onPress={onActionPress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedState
        ]}
        accessibilityRole="button"
        accessibilityLabel={actionLabel}
      >
        <MaterialIcons
          name={icons.Explore}
          size={16}
          color={colors.black}
        />
        <Text style={styles.buttonText}>{actionLabel}</Text>
      </Pressable>
    </View>
  );
};
