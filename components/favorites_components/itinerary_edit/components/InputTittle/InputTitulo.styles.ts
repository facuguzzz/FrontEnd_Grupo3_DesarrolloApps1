import { StyleSheet } from 'react-native';
import { colors } from '../../../../../constants/colors';
import { fonts } from '../../../../../constants/fonts';
import { paddings } from '../../../../../constants/paddings';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: paddings.spacing.lg, // 16px margin on both sides
    marginVertical: paddings.spacing.md,
  },
  label: {
    fontFamily: fonts.family.bodySemiBold,
    fontSize: fonts.size.md, // 16px matching Figma Label
    fontWeight: fonts.weight.semibold,
    color: '#424653', // Matches Figma text-[#424653]
    marginBottom: paddings.spacing.sm, // 8px gap
  },
  inputContainer: {
    width: '100%',
    height: 60, // Figma height: 59.59
    backgroundColor: colors.surface,
    borderRadius: paddings.radius.sm, // 8px radius matching Figma
    borderWidth: 1,
    borderColor: '#dce3ea', // Matches Figma border-[#dce3ea]
    paddingLeft: 13, // Figma pl-[13px]
    paddingRight: 17, // Figma pr-[17px]
    justifyContent: 'center',
    // Subtle shadow for premium design
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    fontFamily: fonts.family.bodyRegular,
    fontSize: fonts.size.md, // 16px matching Figma value
    color: '#6b7280', // Matches Figma text-[#6b7280]
    width: '100%',
    height: '100%',
    padding: 0, // Reset default Android paddings
    ...({ outlineStyle: 'none' } as any),
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 1.5,
  },
});
