/**
 * @format
 * @type {import('tailwindcss').Config}
 */

import colors from './styles/colors/index.ts';

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto_400Regular'],
      },
      boxShadow: {
        soft2XSmall: '0px 1.5px 4px -1px rgba(10, 9, 11, 0.18)',
        softExtraSmall:
          '0px 5px 13px -5px rgba(10, 9, 11, 0.05), 0px 2px 4px -1px rgba(10, 9, 11, 0.02)',
        softSmall: '0px 10px 18px -2px rgba(10, 9, 11, 0.07)',
        softMedium:
          '0px 11px 24px -9px rgba(10, 9, 11, 0.14), 0px 0px 3px -1px rgba(10, 9, 11, 0.04)',
        softLarge:
          '0px 32px 33px -15px rgba(10, 9, 11, 0.17), 0px 0px 3px -1px rgba(10, 9, 11, 0.04)',
        hard2XSmall:
          '0px 2px 5px -2px rgba(10, 9, 11, 0.06), 0px 2px 7px 0px rgba(10, 9, 11, 0.05), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)',
        hardExtraSmall:
          '0px 2px 12px -1px rgba(10, 9, 11, 0.1), 0px 2px 2px -1px rgba(10, 9, 11, 0.04), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)',
        hardSmall: '0px 6px 16px 0px rgba(10, 9, 11, 0.08), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)',
        hardMedium:
          '0px 16px 24px -6px rgba(10, 9, 11, 0.08), 0px 0px 3px -1px rgba(10, 9, 11, 0.08), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)',
        hardLarge:
          '0px 27px 30px -15px rgba(10, 9, 11, 0.13), 0px 0px 3px -1px rgba(10, 9, 11, 0.04), 0px 0px 0px 1px rgba(10, 9, 11, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      coolGray: {
        100: colors.coolGray[100],
        200: colors.coolGray[200],
        300: colors.coolGray[300],
        400: colors.coolGray[400],
        500: colors.coolGray[500],
        600: colors.coolGray[600],
        700: colors.coolGray[700],
        800: colors.coolGray[800],
        900: colors.coolGray[900],
        1000: colors.coolGray[1000],
        1100: colors.coolGray[1100],
        1200: colors.coolGray[1200],
      },
      coolGrayAlpha: {
        100: colors.coolGrayAlpha[100],
        200: colors.coolGrayAlpha[200],
        300: colors.coolGrayAlpha[300],
        400: colors.coolGrayAlpha[400],
        500: colors.coolGrayAlpha[500],
        600: colors.coolGrayAlpha[600],
        700: colors.coolGrayAlpha[700],
        800: colors.coolGrayAlpha[800],
        900: colors.coolGrayAlpha[900],
        1000: colors.coolGrayAlpha[1000],
        1100: colors.coolGrayAlpha[1100],
        1200: colors.coolGrayAlpha[1200],
        1300: colors.coolGrayAlpha[1300],
      },
      primary: {
        100: colors.primary[100],
        200: colors.primary[200],
        300: colors.primary[300],
        400: colors.primary[400],
        500: colors.primary[500],
        600: colors.primary[600],
        700: colors.primary[700],
        800: colors.primary[800],
        900: colors.primary[900],
        1000: colors.primary[1000],
        1100: colors.primary[1100],
        1200: colors.primary[1200],
      },
      green: {
        100: colors.green[100],
        200: colors.green[200],
        300: colors.green[300],
        400: colors.green[400],
        500: colors.green[500],
        600: colors.green[600],
        700: colors.green[700],
        800: colors.green[800],
        900: colors.green[900],
        1000: colors.green[1000],
        1100: colors.green[1100],
        1200: colors.green[1200],
      },
      red: {
        100: colors.red[100],
        200: colors.red[200],
        300: colors.red[300],
        400: colors.red[400],
        500: colors.red[500],
        600: colors.red[600],
        700: colors.red[700],
        800: colors.red[800],
        900: colors.red[900],
        1000: colors.red[1000],
        1100: colors.red[1100],
        1200: colors.red[1200],
      },
      yellow: {
        100: colors.yellow[100],
        200: colors.yellow[200],
        300: colors.yellow[300],
        400: colors.yellow[400],
        500: colors.yellow[500],
        600: colors.yellow[600],
        700: colors.yellow[700],
        800: colors.yellow[800],
        900: colors.yellow[900],
        1000: colors.yellow[1000],
        1100: colors.yellow[1100],
        1200: colors.yellow[1200],
      },
      supportColor: {
        '01': colors.supportColor['01'],
        '02': colors.supportColor['02'],
        '03': colors.supportColor['03'],
        '04': colors.supportColor['04'],
        '05': colors.supportColor['05'],
      },
      shades: {
        0: colors.shades[0],
        100: colors.shades[100],
      },
    },
    screens: {
      '3xl': { max: '2560px' },
      // => @media (max-width: 2560px) { ... }

      '2xl': { max: '1536px' },
      // => @media (max-width: 1536px) { ... }

      xl: { max: '1280px' },
      // => @media (max-width: 1280px) { ... }

      lg: { max: '1184px' },
      // => @media (max-width: 1184px) { ... }

      md: { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      sm: { max: '600px' },
      // => @media (max-width: 600px) { ... }
    },
    fontSize: {
      regular10: ['10px', { lineHeight: '12px', fontWeight: '400' }],
      medium10: ['10px', { lineHeight: '12px', fontWeight: '500' }],
      bold10: ['10px', { lineHeight: '12px', fontWeight: '700' }],
      regular12: ['12px', { lineHeight: '18px', fontWeight: '400' }],
      medium12: ['12px', { lineHeight: '18px', fontWeight: '500' }],
      bold12: ['12px', { lineHeight: '18px', fontWeight: '700' }],
      regular13: ['13px', { lineHeight: '20px', fontWeight: '400' }],
      medium13: ['13px', { lineHeight: '20px', fontWeight: '500' }],
      bold13: ['13px', { lineHeight: '20px', fontWeight: '700' }],
      regular14: ['14px', { lineHeight: '20px', fontWeight: '400' }],
      medium14: ['14px', { lineHeight: '20px', fontWeight: '500' }],
      bold14: ['14px', { lineHeight: '20px', fontWeight: '700' }],
      regular16: ['16px', { lineHeight: '26px', fontWeight: '400' }],
      medium16: ['16px', { lineHeight: '26px', fontWeight: '500' }],
      bold16: ['16px', { lineHeight: '26px', fontWeight: '700' }],
      regular18: ['18px', { lineHeight: '28px', fontWeight: '400' }],
      medium18: ['18px', { lineHeight: '28px', fontWeight: '500' }],
      bold18: ['18px', { lineHeight: '28px', fontWeight: '700' }],
      regular20: ['20px', { lineHeight: '28px', fontWeight: '400' }],
      medium20: ['20px', { lineHeight: '28px', fontWeight: '500' }],
      bold20: ['20px', { lineHeight: '28px', fontWeight: '700' }],
      regular24: ['24px', { lineHeight: '32px', fontWeight: '400' }],
      medium24: ['24px', { lineHeight: '32px', fontWeight: '500' }],
      bold24: ['24px', { lineHeight: '32px', fontWeight: '700' }],
      regular32: ['32px', { lineHeight: '40px', fontWeight: '400' }],
      medium32: ['32px', { lineHeight: '40px', fontWeight: '500' }],
      bold32: ['32px', { lineHeight: '40px', fontWeight: '700' }],
      regular36: ['36px', { lineHeight: '44px', fontWeight: '400' }],
      medium36: ['36px', { lineHeight: '44px', fontWeight: '500' }],
      bold36: ['36px', { lineHeight: '44px', fontWeight: '700' }],
      regular48: ['48px', { lineHeight: '72px', fontWeight: '400' }],
      medium48: ['48px', { lineHeight: '72px', fontWeight: '500' }],
      bold48: ['48px', { lineHeight: '72px', fontWeight: '700' }],
      regular60: ['60px', { lineHeight: '90px', fontWeight: '400' }],
      medium60: ['60px', { lineHeight: '90px', fontWeight: '500' }],
      bold60: ['60px', { lineHeight: '90px', fontWeight: '700' }],
      regular70: ['70px', { lineHeight: '108px', fontWeight: '400' }],
      medium70: ['70px', { lineHeight: '108px', fontWeight: '500' }],
      bold70: ['70px', { lineHeight: '108px', fontWeight: '700' }],
    },
  },
  plugins: [],
};
