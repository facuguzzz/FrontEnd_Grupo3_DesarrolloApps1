import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { COLORS } from '../src/styles/colors';

interface BottomSheetProps extends ViewProps {
  children: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    width: '100%',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    paddingBottom: 40, // Espacio extra para que no quede pegado al borde inferior
  },
});
