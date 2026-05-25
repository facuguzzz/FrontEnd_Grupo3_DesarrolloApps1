import { StyleSheet } from 'react-native';
import { colors } from '../../../../../constants/colors';
import { fonts } from '../../../../../constants/fonts';
import { paddings } from '../../../../../constants/paddings';

export const styles = StyleSheet.create({
  button: {
    height: 52, // Fixed height from Figma: 52px
    backgroundColor: colors.primary,
    borderRadius: paddings.radius.md, // 16px matching Figma rounded-[16px]
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // Premium shadow matching Figma "Button:shadow" shadow-[0px_10px_15px_-3px_#bfdbfe]
    shadowColor: '#bfdbfe',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 4,
  },
  buttonDisabled: {
    backgroundColor: colors.borderDark,
    shadowOpacity: 0,
    elevation: 0,
  },
  text: {
    fontFamily: fonts.family.bodySemiBold,
    fontSize: fonts.size.sm, // 14px matching Figma (text-[14px])
    fontWeight: fonts.weight.semibold,
    color: colors.textInverse, // White text
  },
  pressedState: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
});
