import React from 'react';
import { TextInput, TextInputProps, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../src/styles/colors';

interface CustomInputProps extends TextInputProps {
  iconName?: keyof typeof Ionicons.glyphMap;
}

export const CustomInput: React.FC<CustomInputProps> = ({ iconName, style, ...props }) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <Ionicons name={iconName} size={20} color={COLORS.textLight} style={styles.icon} />
      )}
      <TextInput
        style={[styles.input, iconName ? styles.inputWithIcon : undefined, style]}
        placeholderTextColor={COLORS.textLight}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: COLORS.backgroundLight,
    height: 50,
  },
  icon: {
    paddingLeft: 15,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    fontSize: 16,
    color: COLORS.textDark,
  },
  inputWithIcon: {
    paddingLeft: 10,
  },
});
