import { fontSize, lineHeight } from '../typography/typography';
import spacing from '../spacing/spacing';
import zIndex from '../zIndex/zIndex';
import color from '../color/color';
import { DefaultTheme } from 'styled-components';

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

export const lightPalette = {
	name: ThemeMode.Light,
	primary: color.blue[5],
	backgroundColor: color.grey[2],
	paper: color.grey[0],
	border: color.grey[4],
	button: {
		filled: {
			color: color.grey[0],
			backgroundColor: color.blue[5],
			hover: { backgroundColor: color.blue[6] },
			disabled: {
				backgroundColor: color.grey[3],
				color: color.grey[5],
			},
		},
		outlined: {
			color: color.blue[5],
			border: color.blue[5],
			backgroundColor: 'transparent',
			hover: {
				backgroundColor: color.blue[0],
				color: color.blue[6],
				border: color.blue[6],
			},
			disabled: {
				backgroundColor: 'transparent',
				color: color.grey[5],
				border: color.grey[5],
			},
		},
		text: {
			color: color.blue[5],
			backgroundColor: 'transparent',
			hover: { color: color.blue[6], backgroundColor: color.blue[0] },
			disabled: {
				backgroundColor: 'transparent',
				color: color.grey[5],
			},
		},
	},
	iconButton: {
		color: color.grey[5],
		backgroundColor: 'transparent',
		hover: { backgroundColor: color.grey[3] },
		disabled: {
			color: color.grey[3],
		},
	},
	chip: {
		filled: {
			color: color.grey[7],
			backgroundColor: color.grey[3],
			disabled: {
				backgroundColor: color.grey[2],
				color: color.grey[5],
			},
		},
		outlined: {
			color: color.grey[7],
			border: color.grey[7],
			backgroundColor: 'transparent',
			disabled: {
				backgroundColor: 'transparent',
				color: color.grey[5],
				border: color.grey[5],
			},
		},
		button: {
			hover: { backgroundColor: 'rgba(65,67,78,0.12)' },
		},
	},
	appBar: {
		backgroundColor: color.grey[0],
	},
	switch: {
		on: {
			backgroundColor: color.blue[5],
		},
		off: {
			backgroundColor: color.grey[5],
		},
	},
	surface: {
		primary: color.grey[1],
	},
	text: {
		primary: color.grey[9],
		secondary: '#2f3037',
		tertiary: '#525560',
		quarternary: '#9194a1',
		placeholder: 'rgba(82,85,96,0.5)',
	},
	drawer: {
		backgroundColor: color.grey[0],
		border: color.grey[4],
	},
};

export const darkPalette = {
	name: ThemeMode.Dark,
	primary: color.blue[5],
	backgroundColor: color.grey[9],
	paper: color.grey[8],
	border: color.grey[7],
	button: {
		filled: {
			color: color.grey[9],
			backgroundColor: color.blue[3],
			hover: { backgroundColor: color.blue[4] },
			disabled: {
				backgroundColor: color.grey[7],
				color: color.grey[9],
			},
		},
		outlined: {
			color: color.blue[3],
			border: color.blue[3],
			backgroundColor: 'transparent',
			hover: {
				backgroundColor: color.grey[8],
				border: color.blue[4],
			},
			disabled: {
				backgroundColor: 'transparent',
				color: color.grey[7],
				border: color.blue[7],
			},
		},
		text: {
			color: color.blue[3],
			backgroundColor: 'transparent',
			hover: { color: color.blue[3], backgroundColor: color.grey[8] },
			disabled: {
				color: color.grey[7],
			},
		},
	},
	iconButton: {
		color: color.grey[5],
		backgroundColor: 'transparent',
		hover: { backgroundColor: color.grey[7] },
		disabled: {
			color: color.grey[7],
		},
	},
	chip: {
		filled: {
			color: color.grey[0],
			backgroundColor: color.grey[7],
			disabled: {
				backgroundColor: color.grey[7],
				color: color.grey[8],
			},
		},
		outlined: {
			color: color.grey[0],
			border: color.grey[0],
			backgroundColor: 'transparent',
			disabled: {
				backgroundColor: 'transparent',
				color: color.grey[5],
				border: color.grey[5],
			},
		},
		button: {
			hover: { backgroundColor: 'rgba(65,67,78,0.12)' },
		},
	},
	appBar: {
		backgroundColor: color.grey[8],
	},
	switch: {
		on: {
			backgroundColor: color.blue[3],
		},
		off: {
			backgroundColor: color.grey[7],
		},
	},
	surface: {
		primary: color.grey[11],
	},
	text: {
		primary: color.grey[0],
		secondary: '#e3e4e8',
		tertiary: '#a9abb6',
		quarternary: '#6c6f7e',
		placeholder: 'rgba(145,148,161,0.5)',
	},
	drawer: {
		backgroundColor: color.grey[8],
		border: color.grey[7],
	},
};

export const lightTheme: DefaultTheme = {
	...tokens,
	...lightPalette,
};

export const darkTheme: DefaultTheme = {
	...tokens,
	...darkPalette,
};

export type TTheme = typeof lightTheme | typeof darkTheme;
