import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import { icons } from '@/constants/icons';
import { paddings } from '@/constants/paddings';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CATEGORIES = [
  { id: 1, name: "Naturaleza", image: <MaterialIcons name={icons.Landscape} size={fonts.size.xxl} color={colors.lightgreen} /> },
  { id: 2, name: "Gastronomia", image: <MaterialIcons name={icons.Restaurant} size={fonts.size.xxl} color={colors.warning} /> },
  { id: 3, name: "Cultura", image: <MaterialIcons name={icons.Museum} size={fonts.size.xxl} color={colors.primary} /> },
  { id: 4, name: "Aventura", image: <MaterialIcons name={icons.Hiking} size={fonts.size.xxl} color={colors.brownlight} /> },
];

export function CategoriesCarousel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity key={category.id} style={styles.card}>
            <View style={styles.iconWrapper}>{category.image}</View>
            <Text style={styles.categoryLabel}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: paddings.spacing.sm + 2,
    marginBottom: paddings.spacing.xl,
  },
  title: {
    color: colors.text,
    fontSize: fonts.size.xl + 2,
    fontFamily: fonts.family.headingBold,
    marginBottom: paddings.spacing.md,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: paddings.radius.sm + 4,
    marginRight: paddings.spacing.md,
    paddingHorizontal: paddings.spacing.lg,
    paddingVertical: paddings.spacing.sm + 2,
    gap: paddings.spacing.sm,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  categoryLabel: {
    color: colors.text,
    fontSize: fonts.size.sm,
    fontFamily: fonts.family.bodySemiBold,
  },
});