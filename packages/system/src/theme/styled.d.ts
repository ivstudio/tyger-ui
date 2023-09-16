import 'styled-components';

import { tokens } from '@tyger-ui/system';

export type ButtonTheme = {
	color: string;
	backgroundColor?: string;
	border?: string;
	hover: {
		color?: string;
		backgroundColor?: string;
		border?: string;
	};
	disabled: {
		color?: string;
		backgroundColor?: string;
		border?: string;
	};
};

export type ChipTheme = {
	color: string;
	backgroundColor: string;
	border?: string;
	disabled: {
		color?: string;
		backgroundColor?: string;
		border?: string;
	};
};

export interface ChipButtonTheme extends ChipTheme {
	hover: {
		color?: string;
		backgroundColor?: string;
	};
}

export type IconButtonTheme = {
	color: string;
	backgroundColor: string;
	hover: {
		color?: string;
		backgroundColor?: string;
	};
	disabled: {
		color?: string;
	};
};

export type SwitchTheme = {
	on: {
		backgroundColor: string;
	};
	off: {
		backgroundColor: string;
	};
	disabled?: {
		backgroundColor: string;
	};
};

export type Drawer = {
	backgroundColor: string;
	border?: string;
	color?: string;
};

export interface SystemTokens {
	spacing: typeof tokens.spacing;
	color: typeof tokens.color;
	fontSize: typeof tokens.fontSize;
	lineHeight: typeof tokens.lineHeight;
	zIndex: typeof tokens.zIndex;
}

type InputTheme = {
	borderColor: string;
	color: string;
	placeholder: string;
	disabled: {
		backgroundColor: string;
		color: string;
	};
	error: {
		color: string;
	};
};

export interface ITheme extends SystemTokens {
	name: ThemeMode;
	primary: string;
	backgroundColor?: string;
	border: string;
	paper: string;
	button: {
		filled: ButtonTheme;
		outlined: ButtonTheme;
		text: ButtonTheme;
	};
	iconButton: IconButtonTheme;
	chip: {
		filled: ChipTheme;
		outlined: ChipTheme;
		button: ChipButtonTheme;
	};
	switch: SwitchTheme;
	appBar: {
		backgroundColor: string;
		color: string;
	};
	text: {
		primary: string;
		secondary: string;
		tertiary: string;
		quarternary: string;
		placeholder: string;
	};
	drawer: Drawer;
	input: InputTheme;
}

declare module 'styled-components' {
	export interface DefaultTheme extends ITheme {}
}
