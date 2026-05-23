import React, { useRef } from 'react';
import { Pressable, Animated, StyleProp, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../../../constants/colors';
import { iconsName } from '../../../constants/icons';
import { styles } from './FavoriteButton.styles';

export interface FavoriteButtonProps {
  /** Flag showing whether it is favorited */
  isFavorite: boolean;
  /** Callback triggered when pressed */
  onPress?: () => void;
  /** Custom styles to apply to the container */
  style?: StyleProp<ViewStyle>;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onPress,
  style,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.90,
      speed: 40,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 4,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.heartButton, style]}
      accessibilityRole="button"
      accessibilityLabel={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <MaterialIcons
          name={isFavorite ? iconsName.FavoriteFilled : iconsName.FavoriteOutline}
          size={18}
          color={isFavorite ? colors.danger : colors.textSecondary}
        />
      </Animated.View>
    </Pressable>
  );
};
