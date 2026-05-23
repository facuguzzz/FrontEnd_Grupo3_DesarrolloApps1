import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../src/styles/colors';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  showArrow?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ title, variant = 'primary', showArrow = false, style, ...props }) => {
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'primary': return styles.bgPrimary;
      case 'secondary': return styles.bgSecondary;
      case 'outline': return styles.bgOutline;
      default: return styles.bgPrimary;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary': return styles.textPrimary;
      case 'secondary': return styles.textSecondary;
      case 'outline': return styles.textOutline;
      default: return styles.textPrimary;
    }
  };

  return (
    <TouchableOpacity style={[styles.button, getBackgroundStyle(), style]} activeOpacity={0.8} {...props}>
      <View style={styles.contentContainer}>
        <Text style={[styles.text, getTextStyle()]}>{title}</Text>
        {showArrow && (
          <Ionicons name="arrow-forward" size={20} color={getTextStyle().color} style={styles.arrowIcon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  arrowIcon: {
    marginLeft: 8,
  },
  bgPrimary: {
    backgroundColor: COLORS.primaryBlue,
  },
  textPrimary: {
    color: COLORS.buttonText,
  },
  bgSecondary: {
    backgroundColor: COLORS.white,
  },
  textSecondary: {
    color: COLORS.primaryBlue,
  },
  bgOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primaryBlue,
  },
  textOutline: {
    color: COLORS.primaryBlue,
  },
});
