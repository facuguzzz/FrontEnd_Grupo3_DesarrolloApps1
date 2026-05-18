import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import type { ReactNode } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CulturaIcon from '../../assets/images/Icono-Cultura.svg';
import CorazonIcon from '../../assets/images/Icono-Corazon.svg';
import { useRouter } from 'expo-router';

type Props = {
  title: string;
  description: string;
  category: string;
  image: ReactNode;
  rating?: string;
  duration?: string;
};

export function CardItinerario({
  title,
  description,
  category,
  image,
  rating = "0",
  duration,
}: Props) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.push('/explorarApp/itinerarioInfo')}
    >

      {/* Imagen */}
      <View style={styles.contenedorImagen}>
        {image}

        {/* Icono de corazon */}
        <TouchableOpacity style={styles.botonCorazon}>
          <CorazonIcon width={19} height={19} />
        </TouchableOpacity>

        {/* Categoria */}
        <View style={styles.etiquetaCategoria}>
          <CulturaIcon width={18} height={18} />
          <Text style={styles.textoCategoria}>{category}</Text>
        </View>
      </View>

      {/* Contenido */}
      <View style={styles.contenido}>

        <View style={styles.headerRow}>
          {/* Título */}
          <Text style={styles.titulo}>{title}</Text>

          {/* Rating */}
          <View style={styles.ratingBadge}>
            <Ionicons name="star" size={14} color="#FACC15" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        {/* Descripción */}
        <Text style={styles.descripcion} numberOfLines={2}>
          {description}
        </Text>

        {/* Duración */}
        {duration && (
          <View style={styles.durationRow}>
            <Ionicons name="time-outline" size={16} color="#6B7280" />
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        )}

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  contenedorImagen: {
    width: "100%",
    height: 180,
    position: "relative",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: "hidden",
  },
  botonCorazon: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  etiquetaCategoria: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  textoCategoria: {
    color: '#111827',
    fontSize: 13,
    fontWeight: '600',
  },
  contenido: {
    padding: 16,
    gap: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: "#111827",
    fontSize: 18,
    fontWeight: "700",
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF9C3',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  ratingText: {
    color: '#111827',
    fontSize: 13,
    fontWeight: '600',
  },
  descripcion: {
    color: "#4B5563",
    fontSize: 14,
    lineHeight: 20,
  },
  durationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  durationText: {
    color: "#6B7280",
    fontSize: 14,
  },
});
