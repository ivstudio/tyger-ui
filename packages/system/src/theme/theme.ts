import { fontSize, lineHeight } from '../typography/typography';
import spacing from '../spacing/spacing';
import zIndex from '../zIndex/zIndex';
import color from '../color';
import { DefaultTheme } from 'styled-components';
import { light } from './light';
import { dark } from './dark';

export const tokens = {
	color,
	spacing,
	fontSize,
	lineHeight,
	zIndex,
};

export enum ThemeMode {
	Dark = 'Dark',
	Light = 'Light',
}

export const lightTheme: DefaultTheme = {
	name: ThemeMode.Light,
	...tokens,
	...light,
};

export const darkTheme: DefaultTheme = {
	name: ThemeMode.Dark,
	...tokens,
	...dark,
};

export type Theme = typeof lightTheme | typeof darkTheme;
