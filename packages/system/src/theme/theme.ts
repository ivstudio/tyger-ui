import { fontSize, lineHeight } from '../typography/typography';
import spacing from '../spacing/spacing';
import zIndex from '../zIndex/zIndex';
import color, { opacityHex } from '../color';
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
				color: color.blue[6],
				backgroundColor: opacityHex(color.blue[5], 0.12),
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
			hover: {
				color: color.blue[6],
				backgroundColor: opacityHex(color.blue[5], 0.12),
			},
			disabled: {
				backgroundColor: 'transparent',
				color: color.grey[5],
			},
		},
	},
	iconButton: {
		color: color.grey[9],
		backgroundColor: 'transparent',
		hover: { backgroundColor: opacityHex(color.blue[5], 0.12) },
		disabled: {
			color: color.grey[5],
		},
	},
	chip: {
		filled: {
			color: color.grey[7],
			backgroundColor: color.grey[4],
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
			color: color.grey[7],
			backgroundColor: color.grey[4],
			hover: { backgroundColor: color.grey[5] },
			disabled: {
				backgroundColor: color.grey[2],
				color: color.grey[5],
			},
		},
	},
	appBar: {
		backgroundColor: color.grey[0],
		color: color.grey[9],
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
		color: color.grey[9],
	},
	input: {
		borderColor: color.grey[7],
		color: color.grey[9],
		placeholder: color.grey[5],
		disabled: {
			backgroundColor: color.grey[5],
			color: color.grey[5],
		},
		error: {
			color: color.negative[5],
		},
	},
};

export const darkPalette = {
	name: ThemeMode.Dark,
	primary: color.blue[5],
	backgroundColor: color.grey[11],
	paper: color.grey[8],
	border: color.grey[7],
	button: {
		filled: {
			color: color.grey[9],
			backgroundColor: color.blue[3],
			hover: { backgroundColor: color.blue[4] },
			disabled: {
				backgroundColor: color.grey[7],
				color: color.grey[5],
			},
		},
		outlined: {
			color: color.blue[3],
			border: color.blue[3],
			backgroundColor: 'transparent',
			hover: {
				backgroundColor: opacityHex(color.blue[3], 0.15),
				border: color.blue[4],
			},
			disabled: {
				backgroundColor: 'transparent',
				color: color.grey[7],
				border: color.grey[7],
			},
		},
		text: {
			color: color.blue[3],
			backgroundColor: 'transparent',
			hover: {
				color: color.blue[3],
				backgroundColor: opacityHex(color.blue[3], 0.15),
			},
			disabled: {
				color: color.grey[7],
			},
		},
	},
	iconButton: {
		color: color.grey[1],
		backgroundColor: 'transparent',
		hover: { backgroundColor: opacityHex(color.blue[3], 0.15) },
		disabled: {
			color: color.grey[6],
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
			color: color.grey[0],
			backgroundColor: color.grey[7],
			hover: { backgroundColor: color.grey[6] },
			disabled: {
				backgroundColor: color.grey[7],
				color: color.grey[8],
			},
		},
	},
	appBar: {
		backgroundColor: color.grey[9],
		color: color.grey[1],
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
		backgroundColor: color.grey[9],
		border: color.grey[8],
		color: color.grey[1],
	},
	input: {
		borderColor: color.grey[6],
		color: color.grey[3],
		placeholder: color.grey[7],
		disabled: {
			backgroundColor: color.grey[7],
			color: color.grey[7],
		},
		error: {
			color: color.negative[4],
		},
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

export type Theme = typeof lightTheme | typeof darkTheme;
