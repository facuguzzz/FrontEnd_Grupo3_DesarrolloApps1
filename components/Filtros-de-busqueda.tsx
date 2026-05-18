import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function FiltrosDeBusqueda() {
  return (
    /*Contenedor Principal*/
    < View style={styles.container} >
      <Ionicons name="search" size={27} color="#9CA3AF" />
      <TextInput
        placeholder="¿A dónde quieres ir?"
        placeholderTextColor="#9CA3AF"
        style={styles.input}
      />
      {/*Contenedor de separador con la imagen de filtro*/}
      <View style={styles.separator} />
      <TouchableOpacity>
        <Ionicons name="options-outline" size={20} color="#6B7280" />
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 20,
    marginTop: 16,
  },
  input: {
    flex: 1,
    color: "#111827",
    marginLeft: 10,
    fontSize: 16,
  },
  separator: {
    width: 1,
    height: 24,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 12,
  },
});