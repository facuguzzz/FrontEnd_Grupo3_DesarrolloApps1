import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
        <Ionicons name="location-outline" size={14} color="#6B7280" />
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
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 4,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  eventSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  eventLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  eventLocationText: {
    fontSize: 13,
    color: '#6B7280',
  },
});
