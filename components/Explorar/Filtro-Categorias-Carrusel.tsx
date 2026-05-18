import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import NaturalezaIcon from '../../assets/images/Icono-Naturaleza.svg';
import GastronomiaIcon from '../../assets/images/Icono-Gastronomia.svg';
import CulturaIcon from '../../assets/images/Icono-Cultura.svg';
import AventuraIcon from '../../assets/images/Icono-Aventura.svg';

const categories = [
  { id: 1, name: "Naturaleza", image: <NaturalezaIcon width={24} height={24} /> },
  { id: 2, name: "Gastronomía", image: <GastronomiaIcon width={24} height={24} /> },
  { id: 3, name: "Cultura", image: <CulturaIcon width={24} height={24} /> },
  { id: 4, name: "Aventura", image: <AventuraIcon width={24} height={24} /> },
];

export function CategoriasCarrusel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} style={styles.card}>
            <View style={styles.image}>{cat.image}</View>
            <Text style={styles.label}>{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    color: "#1E1E1E",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    marginRight: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#374151",
    fontSize: 14,
    fontWeight: "600",
  },
});