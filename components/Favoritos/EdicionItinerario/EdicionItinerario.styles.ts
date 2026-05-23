import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import { paddings } from '../../../constants/paddings';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: paddings.spacing.xl, // 20px gap between Header and first field
    paddingBottom: paddings.spacing.huge, // Extra spacing at the bottom after the button
  },
  titleInputWrapper: {
    marginBottom: paddings.spacing.md,
  },
  daySection: {
    paddingHorizontal: paddings.spacing.lg,
    marginBottom: paddings.spacing.xl,
  },
  dayTitle: {
    fontFamily: fonts.family.bodySemiBold,
    fontSize: fonts.size.sm, // 14px matching Día 1 / Día 2 in Figma
    fontWeight: fonts.weight.semibold,
    color: '#6b7280', // Matches Figma text-[#6b7280]
    textAlign: 'center',
    marginBottom: paddings.spacing.md,
  },
  activityList: {
    width: '100%',
  },
  buttonWrapper: {
    paddingHorizontal: 25, // Matches Figma x=25 (width 340 on 390 screen)
    marginTop: paddings.spacing.md,
    marginBottom: paddings.spacing.lg,
  },
});
