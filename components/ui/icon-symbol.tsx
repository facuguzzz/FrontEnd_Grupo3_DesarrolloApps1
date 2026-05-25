// Fallback for using MaterialIcons on Android and web.

import { SymbolView, SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';
import { icons, AppIconKey } from '@/constants/icons';

/**
 * An icon component that uses native SF Symbols on iOS, and Material Symbols on Android and web.
 * Uses the centralized icons definition from constants/icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: AppIconKey;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={icons[name] as any}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}
