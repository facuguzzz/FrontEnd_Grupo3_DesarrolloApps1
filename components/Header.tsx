import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LunaIcon from '../assets/images/Icono-Luna.svg';
import PerfilIcon from '../assets/images/Imagen-Perfil-Temporal.svg';

type HeaderProps = {
  title?: string;
};

export function Header({ title = "Explorar" }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    //Contenedor del principal
    <View style={[styles.header, { paddingTop: insets.top, height: 64 + insets.top }]}>

      {/* Titulo */}
      <Text style={styles.titulo}>{title}</Text>

      <View style={styles.iconosContainer}>
        {/* Icono de la luna */}
        <TouchableOpacity style={styles.iconoLuna}>
          <LunaIcon width={40} height={40} />
        </TouchableOpacity>

        {/* Imagen del perfil */}
        <TouchableOpacity style={styles.perfilImg}>
          <PerfilIcon width={40} height={40} />
        </TouchableOpacity>
      </View>

    </View>
  );

}
const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: '#F8FAFC',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -20,
    paddingHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconosContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  titulo: {
    fontFamily: "Inter-Bold",
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: -0.5,
    color: '#2563EB',
  },
  iconoLuna: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  perfilImg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
  },
});