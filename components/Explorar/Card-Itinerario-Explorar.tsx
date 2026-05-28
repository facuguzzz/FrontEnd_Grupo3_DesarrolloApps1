import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import { icons } from '@/constants/icons';
import { paddings } from '@/constants/paddings';
import { Colors } from '@/constants/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useState, type ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  title: string;
  description: string;
  category: string;
  image: ReactNode;
  rating?: string;
  duration?: string;
};

export function ExploreItineraryCard({
  title,
  description,
  category,
  image,
  rating = "0",
  duration,
}: Props) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.push('/explorarApp/itinerarioInfo')}
    >

      {/* Image */}
      <View style={styles.imageContainer}>
        {image}

        {/* Heart Icon */}
        <TouchableOpacity style={styles.heartButton} onPress={() => setIsFavorite(!isFavorite)}>
          <MaterialIcons
            name={isFavorite ? icons.FavoriteFilled : icons.FavoriteOutline}
            size={fonts.size.xl}
            color={isFavorite ? colors.danger : colors.textSecondary}
          />
        </TouchableOpacity>

        {/* Category */}
        <View style={styles.categoryBadge}>
          <MaterialIcons name={icons.Museum} size={fonts.size.lg} color={colors.primary} />
          <Text style={styles.categoryText}>{category}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>

        <View style={styles.headerRow}>
          {/* Title */}
          <Text style={styles.title}>{title}</Text>

          {/* Rating */}
          <View style={styles.ratingBadge}>
            <MaterialIcons name={icons.Star} size={fonts.size.sm} color={colors.warning} />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>

        {/* Duration */}
        {duration && (
          <View style={styles.durationRow}>
            <MaterialIcons name={icons.Schedule} size={fonts.size.md} color={colors.textSecondary} />
            <Text style={styles.durationText}>{duration}</Text>
          </View>
        )}

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: paddings.radius.md,
    marginBottom: paddings.spacing.xl,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.borderDark,
  },
  imageContainer: {
    width: "100%",
    height: 180,
    position: "relative",
    borderTopLeftRadius: paddings.radius.md,
    borderTopRightRadius: paddings.radius.md,
    overflow: "hidden",
  },
  heartButton: {
    position: 'absolute',
    top: paddings.spacing.md,
    right: paddings.spacing.md,
    backgroundColor: colors.surface,
    width: 35,
    height: 35,
    borderRadius: paddings.radius.round,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryBadge: {
    position: 'absolute',
    bottom: paddings.spacing.md,
    left: paddings.spacing.md,
    backgroundColor: colors.surface,
    borderRadius: paddings.radius.lg,
    paddingHorizontal: paddings.spacing.md,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  categoryText: {
    color: Colors.light.text,
    fontSize: fonts.size.sm - 1, 
    fontFamily: fonts.family.bodySemiBold,
  },
  content: {
    padding: paddings.spacing.lg,
    gap: paddings.spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.light.text,
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.headingBold,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF9C3',
    paddingHorizontal: paddings.spacing.sm,
    paddingVertical: 4,
    borderRadius: paddings.radius.sm + 4,
    gap: 4,
  },
  ratingText: {
    color: Colors.light.text,
    fontSize: fonts.size.sm - 1,
    fontFamily: fonts.family.bodySemiBold,
  },
  description: {
    color: colors.textSecondary,
    fontSize: fonts.size.sm,
    lineHeight: 20,
    fontFamily: fonts.family.bodyRegular,
  },
  durationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: paddings.spacing.xs,
    marginTop: paddings.spacing.xs,
  },
  durationText: {
    color: colors.textSecondary,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bodyRegular,
  },
});
