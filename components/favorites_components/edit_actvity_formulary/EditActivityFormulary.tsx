import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { styles } from './EditActivityFormulary.styles';

export interface ActivityFormValues {
  title: string;
  description: string;
  time: string;
  location: string;
}

export interface EditActivityFormularyProps {
  initialValues: ActivityFormValues;
  onSave: (values: ActivityFormValues) => void;
  onCancel: () => void;
}

export const EditActivityFormulary: React.FC<EditActivityFormularyProps> = ({
  initialValues,
  onSave,
  onCancel,
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);
  const [time, setTime] = useState(initialValues.time);
  const [location, setLocation] = useState(initialValues.location);

  const handleSave = () => {
    onSave({
      title: title.trim(),
      description: description.trim(),
      time: time.trim(),
      location: location.trim(),
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Título de la actividad</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={setTitle}
              placeholder="Ej. Trekking Glaciar"
              placeholderTextColor={colors.textSecondary}
              accessibilityLabel="Título de la actividad"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={description}
              onChangeText={setDescription}
              placeholder="Ej. Caminata sobre el hielo con grampones."
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={4}
              accessibilityLabel="Descripción de la actividad"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Hora</Text>
            <TextInput
              style={styles.input}
              value={time}
              onChangeText={setTime}
              placeholder="Ej. 09:00"
              placeholderTextColor={colors.textSecondary}
              accessibilityLabel="Hora de la actividad"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Ubicación</Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Ej. Parque Nacional Los Glaciares"
              placeholderTextColor={colors.textSecondary}
              accessibilityLabel="Ubicación de la actividad"
            />
          </View>

          <Pressable
            onPress={handleSave}
            style={({ pressed }) => [
              styles.saveButton,
              pressed && styles.pressedState
            ]}
            accessibilityRole="button"
            accessibilityLabel="Guardar cambios de la actividad"
          >
            <Text style={styles.saveButtonText}>Guardar cambios</Text>
          </Pressable>

          <Pressable
            onPress={onCancel}
            style={({ pressed }) => [
              styles.cancelButton,
              pressed && styles.pressedState
            ]}
            accessibilityRole="button"
            accessibilityLabel="Cancelar cambios de la actividad"
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
