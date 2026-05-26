import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';

type Props = {
  time: string;
  title: string;
  subtitle: string;
  location: string;
  isLast?: boolean;
};

export function CardActividad({ time, title, subtitle, location, isLast = false }: Props) {
  return (
    <View style={[styles.eventItem, isLast && styles.eventItemLast]}>
      <Text style={styles.eventTime}>{time}</Text>
      <Text style={styles.eventTitle}>{title}</Text>
      <Text style={styles.eventSubtitle}>{subtitle}</Text>
      <View style={styles.eventLocationRow}>
        <Ionicons name="location-outline" size={14} color={colors.textSecondary} />
        <Text style={styles.eventLocationText}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eventItem: {
    marginBottom: 24,
  },
  eventItemLast: {
    marginBottom: 0,
  },
  eventTime: {
    fontFamily: fonts.family.bodySemiBold,
    fontSize: fonts.size.sm, // 14px
    fontWeight: fonts.weight.semibold,
    color: colors.primary,
    marginBottom: 4,
  },
  eventTitle: {
    fontFamily: fonts.family.headingBold,
    fontSize: fonts.size.md, // 16px
    fontWeight: fonts.weight.bold,
    color: colors.text,
    marginBottom: 2,
  },
  eventSubtitle: {
    fontFamily: fonts.family.bodyRegular,
    fontSize: fonts.size.sm, // 14px
    color: colors.textSecondary,
    marginBottom: 4,
  },
  eventLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  eventLocationText: {
    fontFamily: fonts.family.bodyRegular,
    fontSize: fonts.size.xs, // 13px
    color: colors.textSecondary,
  },
});
