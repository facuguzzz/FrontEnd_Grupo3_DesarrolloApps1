import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import { icons } from '@/constants/icons';
import { paddings } from '@/constants/paddings';
import { Colors } from '@/constants/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TeatroColonIcon from '../../assets/images/Imagen-Teatro-Colon.svg';

type Props = {
  title?: string;
  category?: string;
  dateRange?: string;
  description?: string;
  onBackPress?: () => void;
};

export function ItineraryInfoCard({
  title = "Teatro Colón",
  category = "Cultura",
  dateRange = "15 Oct - 22 Oct, 2024",
  description = "Visita guiada por el emblemático Teatro Colón, descubriendo su historia, arquitectura y secretos detrás del escenario.",
  onBackPress
}: Props) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View>
      {/** Image container */}
      <View style={styles.imageContainer}>
        {/** Overlay image with text */}
        <TeatroColonIcon width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={StyleSheet.absoluteFillObject} />

        {/** Dark transparent overlay */}
        <View style={styles.heroOverlay}>
          {/* Back and heart icons */}
          <View style={styles.heroTopBar}>
            {/** Back button */}
            <TouchableOpacity style={styles.circularContainer} onPress={onBackPress}>
              <MaterialIcons name={icons.ArrowBack} size={fonts.size.xl} color={colors.black} />
            </TouchableOpacity>
            {/** Heart button */}
            <TouchableOpacity style={styles.circularContainer} onPress={() => setIsFavorite(!isFavorite)}>
              <MaterialIcons
                name={isFavorite ? icons.FavoriteFilled : icons.FavoriteOutline}
                size={fonts.size.xl}
                color={isFavorite ? colors.danger : colors.textSecondary}
              />
            </TouchableOpacity>
          </View>

          {/** Bottom info container */}
          <View style={styles.bottomInfoContainer}>
            {/** Category badge */}
            <View style={styles.categoryBadge}>
              <MaterialIcons name={icons.Museum} size={fonts.size.lg} color={colors.primary} style={{ marginRight: 4 }} />
              <Text style={styles.categoryText}>{category}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.datesRow}>
              <MaterialIcons name={icons.CalendarToday} size={fonts.size.md} color={colors.textInverse} />
              <Text style={styles.datesText}>{dateRange}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 280,
    marginTop: 10,
    borderRadius: paddings.radius.xxl,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  heroOverlay: {
    flex: 1,
    padding: paddings.spacing.lg,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  heroTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circularContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomInfoContainer: {
    gap: paddings.spacing.sm,
  },
  categoryBadge: {
    backgroundColor: colors.surface,
    paddingHorizontal: paddings.spacing.md,
    paddingVertical: 6,
    borderRadius: paddings.radius.lg,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    color: Colors.light.text,
    fontSize: fonts.size.sm - 1,
    fontWeight: fonts.weight.bold,
    marginLeft: 2,
  },
  title: {
    color: colors.textInverse,
    fontSize: fonts.size.xxxl,
    fontFamily: fonts.family.headingBold,
    lineHeight: 36,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  datesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  datesText: {
    color: colors.textInverse,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bodySemiBold,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  description: {
    fontSize: fonts.size.md,
    color: colors.textSecondary,
    fontFamily: fonts.family.bodyRegular,
    textAlign: 'center',
    marginTop: paddings.spacing.xl,
    marginBottom: paddings.spacing.xxl,
  },
});
