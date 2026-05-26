import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '../../../../constants/colors';
import { styles } from './InputTitulo.styles';

export interface InputTituloProps {
  /** The value of the input */
  value: string;
  /** Callback triggered when the text changes */
  onChangeText: (text: string) => void;
  /** Label text (defaults to 'Título') */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
}

export const InputTitulo: React.FC<InputTituloProps> = ({
  value,
  onChangeText,
  label = 'Título',
  placeholder = 'Escribe el título aquí...',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};
