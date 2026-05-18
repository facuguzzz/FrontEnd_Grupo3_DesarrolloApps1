import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CulturaIcon from '../../assets/images/Icono-Cultura.svg';
import TeatroColonIcon from '../../assets/images/Imagen-Teatro-Colon.svg';

type Props = {
  title?: string;
  category?: string;
  dateRange?: string;
  description?: string;
  onBackPress?: () => void;
};

export function CardItinerarioInfo({
  title = "Teatro Colón",
  category = "Cultura",
  dateRange = "15 Oct - 22 Oct, 2024",
  description = "Visita guiada por el emblemático Teatro Colón, descubriendo su historia, arquitectura y secretos detrás del escenario.",
  onBackPress
}: Props) {
  return (
    <View>
      <View style={styles.heroImageContainer}>
        <TeatroColonIcon width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFillObject} />

        {/* Iconos de atras y corazon */}
        <View style={styles.heroOverlay}>
          <View style={styles.heroTopBar}>
            <TouchableOpacity style={styles.circleButton} onPress={onBackPress}>
              <Ionicons name="arrow-back" size={20} color="#111827" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Ionicons name="heart-outline" size={20} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <View style={styles.heroBottomContent}>
            <View style={styles.locationBadge}>
              <CulturaIcon width={16} height={16} style={{ marginRight: 4 }} />
              <Text style={styles.locationBadgeText}>{category}</Text>
            </View>
            <Text style={styles.heroTitle}>{title}</Text>
            <View style={styles.dateRow}>
              <Ionicons name="calendar-outline" size={16} color="#FFFFFF" />
              <Text style={styles.dateText}>{dateRange}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Descripción */}
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heroImageContainer: {
    width: '100%',
    height: 280,
    marginTop: 10,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  heroOverlay: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  heroTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroBottomContent: {
    gap: 8,
  },
  locationBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationBadgeText: {
    color: '#111827',
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 36,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
});
