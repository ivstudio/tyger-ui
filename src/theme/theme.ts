import { fontSize, lineHeight } from '../utils/font';
import { spacing } from '../utils/spacing';
import { zindex } from '../utils/zIndex';
import { color, darkPalette as dark, lightPalette as light } from './colors';

export const theme = {
    color,
    spacing,
    fontSize,
    lineHeight,
    zindex,
};

export const lightPalette = {
    ...theme,
    ...light,
};

export const darkPalette = {
    ...theme,
    ...dark,
};

export const lightTheme: typeof lightPalette = lightPalette;
export const darkTheme: typeof darkPalette = darkPalette;
export type TThemeNames = 'darkTheme' | 'lightTheme';
export type Theme = typeof lightTheme | typeof darkTheme;
export type ThemeProps = { theme?: Theme };
