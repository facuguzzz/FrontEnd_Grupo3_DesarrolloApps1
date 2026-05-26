import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import { paddings } from '../../../constants/paddings';

export const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: paddings.spacing.huge, // Aproximación a 37px
    alignItems: 'center',
    width: '100%',
    paddingBottom: paddings.spacing.lg, // Aproximación a 14px
    paddingTop: paddings.spacing.lg, // Aproximación a 15px
    paddingHorizontal: paddings.spacing.xl, // Aproximación a 19px
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    elevation: 8,
  },
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 43,
    borderRadius: 10,
  },
  contentWrapperActive: {
    backgroundColor: colors.surfaceHighlight,
  },
  tabLabel: {
    fontFamily: fonts.family.headingMedium,
    fontSize: 11,
    fontWeight: fonts.weight.medium,
    lineHeight: 16.5,
    color: colors.button_gray,
  },
  tabLabelActive: {
    color: colors.primary,
  },
});
