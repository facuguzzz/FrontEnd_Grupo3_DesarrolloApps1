import { ExploreItineraryCard } from '@/components/Explorar/Card-Itinerario-Explorar';
import { CategoriesCarousel } from '@/components/Explorar/Filtro-Categorias-Carrusel';
import { FiltrosDeBusqueda } from '@/components/Filtros-de-busqueda';
import { Header } from '@/components/Header';
import { colors } from '@/constants/colors';
import { paddings } from '@/constants/paddings';
import { ScrollView, StyleSheet } from 'react-native';
import TeatroColonIcon from '../../assets/images/Imagen-Teatro-Colon.svg';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <FiltrosDeBusqueda />
      <CategoriesCarousel />

      <ExploreItineraryCard
        title="Teatro Colón"
        description="Visita guiada por el emblemático Teatro Colón, descubriendo su historia, arquitectura y secretos detrás del escenario."
        category="Culture"
        image={<TeatroColonIcon width="100%" height={180} preserveAspectRatio="xMidYMid slice" />}
        rating="5.0k"
        duration="3 dias"
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surfaceNeutral,
    paddingTop: 0,
    paddingHorizontal: paddings.spacing.xl,
  },
});