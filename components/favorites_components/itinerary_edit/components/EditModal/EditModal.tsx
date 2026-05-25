import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform, Pressable, Text, TextInput, View } from 'react-native';
import { colors } from '../../../../../constants/colors';
import { styles } from './EditModal.styles';

export interface EditModalProps {
  /** Controls the visibility of the modal */
  visible: boolean;
  /** Callback triggered when closing the modal without saving */
  onClose: () => void;
  /** Callback triggered when saving the edited title */
  onSave: (newTitle: string) => void;
  /** The initial value of the input */
  initialValue: string;
}

export const EditModal: React.FC<EditModalProps> = ({
  visible,
  onClose,
  onSave,
  initialValue,
}) => {
  const [text, setText] = useState(initialValue);

  // Sync state with initialValue when modal becomes visible
  useEffect(() => {
    if (visible) {
      setText(initialValue);
    }
  }, [visible, initialValue]);

  const handleSave = () => {
    if (text.trim()) {
      onSave(text.trim());
    }
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.backdrop}
      >
        <Pressable style={styles.dismissArea} onPress={onClose} />
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Editar Actividad</Text>
          <Text style={styles.modalSubtitle}>Ingresa el nuevo título para la actividad:</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={setText}
              placeholder="Ej. Trekking Glaciar"
              placeholderTextColor={colors.textSecondary}
              autoFocus
              selectTextOnFocus
            />
          </View>

          <View style={styles.actionsRow}>
            <Pressable
              onPress={onClose}
              style={({ pressed }) => [
                styles.button,
                styles.cancelButton,
                pressed && styles.pressedState,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Cancelar"
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </Pressable>

            <Pressable
              onPress={handleSave}
              style={({ pressed }) => [
                styles.button,
                styles.saveButton,
                pressed && styles.pressedState,
              ]}
              accessibilityRole="button"
              accessibilityLabel="Guardar cambios"
            >
              <Text style={styles.saveButtonText}>Guardar</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
