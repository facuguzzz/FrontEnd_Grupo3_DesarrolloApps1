import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AventuraIcon from '../../assets/images/Icono-Aventura.svg';
import CulturaIcon from '../../assets/images/Icono-Cultura.svg';
import GastronomiaIcon from '../../assets/images/Icono-Gastronomia.svg';
import NaturalezaIcon from '../../assets/images/Icono-Naturaleza.svg';
import { CalendarioViaje } from '../../components/Preferencias/CalendarioViaje';
import { ProvinciaSelector } from '../../components/Preferencias/ProvinciaSelector';
import { buscarPorPreferencias } from '../../src/services/itinerarioService';
import { CATEGORIA_LABEL, CategoriaItinerario, Provincia, PROVINCIA_LABEL } from '../../src/types/itinerario';

const CATEGORIAS: { value: CategoriaItinerario; icon: React.ReactNode }[] = [
  { value: CategoriaItinerario.NATURALEZA, icon: <NaturalezaIcon width={28} height={28} /> },
  { value: CategoriaItinerario.GASTRONOMIA, icon: <GastronomiaIcon width={28} height={28} /> },
  { value: CategoriaItinerario.AVENTURA, icon: <AventuraIcon width={28} height={28} /> },
  { value: CategoriaItinerario.CULTURA, icon: <CulturaIcon width={28} height={28} /> },
  {
    value: CategoriaItinerario.NOCHE,
    icon: <Ionicons name="moon-outline" size={28} color="#2F65E3" />,
  },
  {
    value: CategoriaItinerario.COMPRA,
    icon: <MaterialCommunityIcons name="shopping-outline" size={28} color="#2F65E3" />,
  },
];

function formatFecha(iso: string) {
  const [y, m, d] = iso.split('-');
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${d} ${meses[parseInt(m) - 1]} ${y}`;
}

export default function PreferenciasScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [provincia, setProvincia] = useState<Provincia | undefined>();
  const [fechaInicio, setFechaInicio] = useState<string | undefined>();
  const [fechaFin, setFechaFin] = useState<string | undefined>();
  const [categorias, setCategorias] = useState<Set<CategoriaItinerario>>(new Set());
  const [showCalendario, setShowCalendario] = useState(false);
  const [showProvincia, setShowProvincia] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleCategoria = (cat: CategoriaItinerario) => {
    setCategorias((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  const handleBuscar = async () => {
    setLoading(true);
    try {
      const resultados = await buscarPorPreferencias({
        provincia,
        tags: categorias.size > 0 ? Array.from(categorias) : undefined,
        fechaInicio,
        fechaFin,
      });
      router.push({
        pathname: '/recomendaciones',
        params: {
          resultados: JSON.stringify(resultados),
          provincia: provincia ?? '',
          etiquetas: JSON.stringify(Array.from(categorias)),
          fechaInicio: fechaInicio ?? '',
          fechaFin: fechaFin ?? '',
        },
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      Alert.alert('Error al buscar', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Encabezado */}
        <View style={styles.encabezado}>
          <Text style={styles.titulo}>Buscar por{'\n'}preferencias</Text>
          <Text style={styles.subtitulo}>Diseña tu próximo viaje ideal.</Text>
          <TouchableOpacity style={styles.btnVolver} onPress={() => router.back()} activeOpacity={0.8}>
            <Ionicons name="arrow-back" size={16} color="#FFFFFF" />
            <Text style={styles.btnVolverText}>Volver</Text>
          </TouchableOpacity>
        </View>

        {/* Destino */}
        <View style={styles.seccion}>
          <Text style={styles.pregunta}>¿A dónde quieres ir?</Text>
          <TouchableOpacity
            style={styles.inputRow}
            onPress={() => setShowProvincia(true)}
            activeOpacity={0.7}
          >
            <Ionicons name="location-outline" size={18} color="#9CA3AF" />
            <Text style={[styles.inputText, !provincia && styles.inputPlaceholder]}>
              {provincia ? PROVINCIA_LABEL[provincia] : 'Ej: Río Negro, Salta, Buenos Aires...'}
            </Text>
            {provincia && (
              <TouchableOpacity onPress={() => setProvincia(undefined)}>
                <Ionicons name="close-circle" size={18} color="#9CA3AF" />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>

        {/* Fechas */}
        <View style={styles.seccion}>
          <Text style={styles.labelSeccion}>SELECCIONA DIAS</Text>
          <TouchableOpacity style={styles.fechasRow} onPress={() => setShowCalendario(true)} activeOpacity={0.8}>
            <View style={[styles.fechaTab, styles.fechaTabActivo]}>
              <Ionicons name="calendar-outline" size={16} color="#FFFFFF" />
              <Text style={styles.fechaTabTextoActivo}>
                {fechaInicio ? formatFecha(fechaInicio) : 'INICIO'}
              </Text>
            </View>
            <View style={[styles.fechaTab, styles.fechaTabActivo]}>
              <Text style={styles.fechaTabTextoActivo}>
                {fechaFin ? formatFecha(fechaFin) : 'FINAL'}
              </Text>
            </View>
          </TouchableOpacity>
          {(fechaInicio || fechaFin) && (
            <TouchableOpacity onPress={() => { setFechaInicio(undefined); setFechaFin(undefined); }}>
              <Text style={styles.limpiarFechas}>Limpiar fechas</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Categorías */}
        <View style={styles.seccion}>
          <Text style={styles.pregunta}>¿Qué te interesa?</Text>
          <Text style={styles.subtituloCat}>Selecciona todas las categorías que quieras</Text>
          <View style={styles.categoriasGrid}>
            {CATEGORIAS.map(({ value, icon }) => {
              const activa = categorias.has(value);
              return (
                <TouchableOpacity
                  key={value}
                  style={[styles.categoriaCard, activa && styles.categoriaCardActiva]}
                  onPress={() => toggleCategoria(value)}
                  activeOpacity={0.75}
                >
                  {icon}
                  <Text style={[styles.categoriaLabel, activa && styles.categoriaLabelActiva]}>
                    {CATEGORIA_LABEL[value]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Botón fijo abajo */}
      <View style={[styles.footer, { paddingBottom: insets.bottom + 16 }]}>
        <TouchableOpacity
          style={[styles.btnBuscar, loading && styles.btnBuscarLoading]}
          onPress={handleBuscar}
          disabled={loading}
          activeOpacity={0.85}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <Ionicons name="rocket-outline" size={20} color="#FFFFFF" />
              <Text style={styles.btnBuscarText}>Encontrar mi itinerario</Text>
            </>
          )}
        </TouchableOpacity>
        <Text style={styles.footerCaption}>Podrás editar cada detalle después.</Text>
      </View>

      <CalendarioViaje
        visible={showCalendario}
        onClose={() => setShowCalendario(false)}
        onConfirm={(inicio, fin) => { setFechaInicio(inicio); setFechaFin(fin); }}
        initialStart={fechaInicio}
        initialEnd={fechaFin}
      />
      <ProvinciaSelector
        visible={showProvincia}
        onClose={() => setShowProvincia(false)}
        onSelect={setProvincia}
        selected={provincia}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  encabezado: {
    paddingTop: 24,
    paddingBottom: 8,
  },
  titulo: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.8,
    lineHeight: 38,
  },
  subtitulo: {
    fontSize: 15,
    color: '#6B7280',
    marginTop: 6,
    marginBottom: 16,
  },
  btnVolver: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#EF4444',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
  },
  btnVolverText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  seccion: {
    marginTop: 28,
  },
  pregunta: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  labelSeccion: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 1,
    marginBottom: 10,
  },
  subtituloCat: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: -6,
    marginBottom: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  inputText: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
  },
  inputPlaceholder: {
    color: '#9CA3AF',
  },
  fechasRow: {
    flexDirection: 'row',
    gap: 0,
    backgroundColor: '#2F65E3',
    borderRadius: 12,
    overflow: 'hidden',
  },
  fechaTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
  },
  fechaTabActivo: {
    backgroundColor: '#2F65E3',
  },
  fechaTabTextoActivo: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  limpiarFechas: {
    fontSize: 13,
    color: '#2F65E3',
    marginTop: 8,
    textAlign: 'right',
  },
  categoriasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoriaCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    paddingVertical: 18,
    alignItems: 'center',
    gap: 8,
  },
  categoriaCardActiva: {
    borderColor: '#2F65E3',
    backgroundColor: '#EFF4FF',
  },
  categoriaLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  categoriaLabelActiva: {
    color: '#2F65E3',
  },
  footer: {
    paddingTop: 12,
    paddingHorizontal: 20,
    backgroundColor: '#F9FAFB',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    alignItems: 'center',
    gap: 8,
  },
  btnBuscar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#2F65E3',
    borderRadius: 16,
    paddingVertical: 16,
    width: '100%',
  },
  btnBuscarLoading: {
    opacity: 0.7,
  },
  btnBuscarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  footerCaption: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
