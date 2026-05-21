import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  CategoriaItinerario,
  CATEGORIA_LABEL,
  ItinerarioSistemaResumenDTO,
  Provincia,
  PROVINCIA_LABEL,
} from '../src/types/itinerario';

function formatFechaCorta(iso: string) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${parseInt(d)} ${meses[parseInt(m) - 1]}`;
}

function CardResultado({ item }: { item: ItinerarioSistemaResumenDTO }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => router.push('/explorarApp/itinerarioInfo')}
    >
      <View style={styles.cardImageContainer}>
        {item.fotoPortada ? (
          <Image source={{ uri: item.fotoPortada }} style={styles.cardImage} resizeMode="cover" />
        ) : (
          <View style={[styles.cardImage, styles.cardImageFallback]}>
            <Ionicons name="image-outline" size={40} color="#9CA3AF" />
          </View>
        )}
        <View style={styles.provinciasBadge}>
          <Text style={styles.provinciasBadgeText}>
            {PROVINCIA_LABEL[item.provincia] ?? item.provincia}
          </Text>
        </View>
        {item.fechaInicio && item.fechaFin && (
          <View style={styles.fechaBadge}>
            <Ionicons name="calendar-outline" size={12} color="#FFFFFF" />
            <Text style={styles.fechaBadgeText}>
              {`${formatFechaCorta(item.fechaInicio)} - ${formatFechaCorta(item.fechaFin)}, ${item.fechaFin.split('-')[0]}`}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.cardTitulo}>{item.titulo}</Text>
        <Text style={styles.cardDescripcion} numberOfLines={3}>
          {item.descripcion}
        </Text>
        <View style={styles.etiquetasRow}>
          {item.etiquetas?.map((e) => (
            <View key={e} style={styles.etiqueta}>
              <Text style={styles.etiquetaText}>{CATEGORIA_LABEL[e] ?? e}</Text>
            </View>
          ))}
          {item.duracionDias != null && (
            <View style={[styles.etiqueta, styles.etiquetaDias]}>
              <Ionicons name="time-outline" size={12} color="#2F65E3" />
              <Text style={[styles.etiquetaText, styles.etiquetaDiasText]}>
                {`${item.duracionDias} días`}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function RecomendacionesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const params = useLocalSearchParams<{
    resultados: string;
    provincia: string;
    etiquetas: string;
    fechaInicio: string;
    fechaFin: string;
  }>();

  const resultados: ItinerarioSistemaResumenDTO[] = params.resultados
    ? JSON.parse(params.resultados)
    : [];

  const etiquetas: CategoriaItinerario[] = params.etiquetas
    ? JSON.parse(params.etiquetas)
    : [];
  const provinciaLabel = params.provincia
    ? PROVINCIA_LABEL[params.provincia as Provincia] ?? params.provincia
    : null;

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Header azul de resultados */}
      <View style={styles.headerAzul}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerLabel}>RESULTADOS PARA</Text>
          <Text style={styles.headerTitulo}>{provinciaLabel ?? 'Argentina'}</Text>
          <View style={styles.chipsRow}>
            {params.fechaInicio && params.fechaFin && (
              <View style={styles.chip}>
                <Ionicons name="calendar-outline" size={12} color="#FFFFFF" />
                <Text style={styles.chipText}>
                  {resultados[0]?.duracionDias
                    ? `${resultados[0].duracionDias} días`
                    : `${formatFechaCorta(params.fechaInicio)} - ${formatFechaCorta(params.fechaFin)}`}
                </Text>
              </View>
            )}
            {etiquetas.length > 0 && (
              <View style={styles.chip}>
                <Ionicons name="pricetag-outline" size={12} color="#FFFFFF" />
                <Text style={styles.chipText}>
                  {etiquetas.map((e) => CATEGORIA_LABEL[e]).join(' y ')}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>

      {/* Lista de resultados */}
      <ScrollView
        style={styles.lista}
        contentContainerStyle={styles.listaContent}
        showsVerticalScrollIndicator={false}
      >
        {resultados.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="search-outline" size={48} color="#D1D5DB" />
            <Text style={styles.emptyTitle}>Sin resultados</Text>
            <Text style={styles.emptySubtitle}>
              Probá con otros filtros o fechas distintas.
            </Text>
            <TouchableOpacity style={styles.emptyBtn} onPress={() => router.back()}>
              <Text style={styles.emptyBtnText}>Volver a preferencias</Text>
            </TouchableOpacity>
          </View>
        ) : (
          resultados.map((item) => <CardResultado key={item.idItinerario} item={item} />)
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerAzul: {
    backgroundColor: '#2F65E3',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  backBtn: {
    marginTop: 4,
  },
  headerContent: {
    flex: 1,
  },
  headerLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 2,
  },
  headerTitulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  chipText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  lista: {
    flex: 1,
  },
  listaContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    gap: 20,
  },
  // Card de resultado
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardImageContainer: {
    height: 180,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardImageFallback: {
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  provinciasBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#F59E0B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  provinciasBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  fechaBadge: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  fechaBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  cardBody: {
    padding: 16,
    gap: 8,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  cardDescripcion: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  etiquetasRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  etiqueta: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  etiquetaText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    textTransform: 'uppercase',
    letterSpacing: 0.3,
  },
  etiquetaDias: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#EFF4FF',
  },
  etiquetaDiasText: {
    color: '#2F65E3',
  },
  // Empty state
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  emptyBtn: {
    marginTop: 8,
    backgroundColor: '#2F65E3',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  emptyBtnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});
