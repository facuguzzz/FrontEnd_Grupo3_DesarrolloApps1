import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../../../constants/colors';
import { icons } from '../../../constants/icons';
import { styles } from './OfflineBadge.styles';

export interface OfflineBadgeProps {
  /** Optional custom container style */
  style?: StyleProp<ViewStyle>;
}

export const OfflineBadge: React.FC<OfflineBadgeProps> = ({ style }) => {
  return (
    <View style={[styles.offlineBadge, style]}>
      <MaterialIcons 
        name={icons.CloudOffline}
        size={12}
        color={colors.primary}
      />
      <Text style={styles.offlineBadgeText}>Disponible Offline</Text>
    </View>
  );
};
