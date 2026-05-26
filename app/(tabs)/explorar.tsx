import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CardItinerarioExplorar } from '@/components/Explorar/Card-Itinerario-Explorar';
import { CategoriasCarrusel } from '@/components/Explorar/Filtro-Categorias-Carrusel';
import { FiltrosDeBusqueda } from '@/components/Filtros-de-busqueda';
import { Header } from '@/components/common/Header/Header';
import TeatroColonIcon from '../../assets/images/Imagen-Teatro-Colon.svg';

export default function explorar() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      <Header title="Explorar" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <FiltrosDeBusqueda />
        <CategoriasCarrusel />

        <CardItinerarioExplorar
          title="Teatro Colón"
          description="Visita guiada por el emblemático Teatro Colón, 
                        descubriendo su historia, arquitectura y secretos 
                          detrás del escenario."
          category="Cultura"
          image={<TeatroColonIcon width="100%" height={180} preserveAspectRatio="xMidYMid slice" />}
          rating="5.0k"
          duration="3 dias"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingTop: 0,
    paddingHorizontal: 20,
  },
});