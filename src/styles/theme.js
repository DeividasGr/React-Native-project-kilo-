import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#FFE530',
  secondary: '#ff005b',
  primaryBg: '#fce762',
  white: '#fff',
  black: '#000',
  transparentOrange: 'rgba(245, 122, 0, 0.81)',
  transparentYellow: 'rgba(245, 188, 0, 0.81)',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 10,
  margin: 20,
  padding: 12,

  // font sizes
  narmalTitle: 20,
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {fontFamily: 'Roboto-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
  },
  body2: {
    fontFamily: 'Roboto-Light',
    fontSize: SIZES.body2,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
  },
};
