import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import { icons } from '@/constants/icons';
import { paddings } from '@/constants/paddings';
import { Provincia, PROVINCIA_LABEL } from '@/src/types/itinerario';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ProvinciaSelector } from '@/components/Preferencias/ProvinciaSelector';

export function FiltrosDeBusqueda() {
  const [provincia, setProvincia] = useState<Provincia | undefined>();
  const [showProvincia, setShowProvincia] = useState(false);
  return (

    <View style={styles.seccion}>
      <Text style={styles.pregunta}>¿A dónde quieres ir?</Text>
      <TouchableOpacity
        style={styles.inputRow}
        onPress={() => setShowProvincia(true)}
        activeOpacity={0.7}
      >
        <MaterialIcons name={icons.AddItinerary} size={fonts.size.lg} color={colors.textSecondary} />
        <Text style={[styles.inputText, !provincia && styles.inputPlaceholder]}>
          {provincia ? PROVINCIA_LABEL[provincia] : 'Ej: Río Negro, Salta, Buenos Aires...'}
        </Text>
        {provincia && (
          <TouchableOpacity onPress={() => setProvincia(undefined)}>
            <MaterialIcons name="cancel" size={fonts.size.lg} color={colors.textSecondary} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
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
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    paddingHorizontal: paddings.spacing.lg,
    paddingVertical: paddings.spacing.sm,
    borderRadius: paddings.radius.xxl,
    borderWidth: 1,
    borderColor: colors.borderDark,
    marginBottom: paddings.spacing.xl,
    marginTop: paddings.spacing.lg,
  },
  seccion: {
    marginTop: paddings.spacing.xxxl - 4,
  },
  pregunta: {
    fontSize: fonts.size.lg,
    fontFamily: fonts.family.headingBold,
    color: colors.text,
    marginBottom: paddings.spacing.md,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: paddings.spacing.sm + 2,
    backgroundColor: colors.surface,
    borderRadius: paddings.radius.sm + 4,
    borderWidth: 1,
    borderColor: colors.borderDark,
    paddingHorizontal: paddings.spacing.md + 2,
    paddingVertical: paddings.spacing.md + 2,
  },
  inputText: {
    flex: 1,
    fontSize: fonts.size.sm + 1,
    fontFamily: fonts.family.bodyRegular,
    color: colors.text,
  },
  inputPlaceholder: {
    color: colors.textSecondary,
  },
});