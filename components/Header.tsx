import { colors } from '@/constants/colors';
import { fonts } from '@/constants/fonts';
import { icons } from '@/constants/icons';
import { paddings } from '@/constants/paddings';
import { Colors } from '@/constants/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileIcon from '../assets/images/Imagen-Perfil-Temporal.svg';

type HeaderProps = {
  title?: string;
};

export function Header({ title = "Explorar" }: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    // Main container
    <View style={[styles.header, { paddingTop: insets.top, height: 64 + insets.top }]}>

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      <View style={styles.iconsContainer}>
        {/* Dark mode toggle icon */}
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name={icons.DarkMode} size={fonts.size.xl + 2} color={Colors.light.icon} />
        </TouchableOpacity>

        {/* Profile image */}
        <TouchableOpacity style={styles.profileImage}>
          <ProfileIcon width={40} height={40} />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: colors.surfaceNeutralAlt,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -paddings.spacing.xl,
    paddingHorizontal: paddings.spacing.xl,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: paddings.spacing.md,
  },
  title: {
    fontFamily: fonts.family.headingBold,
    fontSize: fonts.size.xxl + 2,
    lineHeight: 32,
    letterSpacing: -0.5,
    color: colors.primary,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: paddings.radius.round,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderDark,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: paddings.radius.round,
    overflow: 'hidden',
  },
});