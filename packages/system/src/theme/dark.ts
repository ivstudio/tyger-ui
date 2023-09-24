import color, { opacityHex } from '../color';

export const dark = {
	primary: color.blue[5],
	backgroundColor: color.grey[11],
	paper: color.grey[10],
	border: color.grey[9],
	text: {
		primary: color.grey[1],
		secondary: '#e3e4e8',
		tertiary: '#a9abb6',
		quarternary: '#6c6f7e',
		placeholder: color.grey[7],
		error: color.negative[3],
		disabled: color.grey[8],
		label: color.grey[5],
	},
	button: {
		filled: {
			color: color.grey[9],
			backgroundColor: color.blue[3],
			hover: { backgroundColor: color.blue[4] },
			disabled: {
				backgroundColor: color.grey[9],
				color: color.grey[7],
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
	drawer: {
		backgroundColor: color.grey[9],
		border: color.grey[8],
		color: color.grey[1],
	},
	textfield: {
		borderColor: color.grey[8],
		backgroundColor: color.grey[9],
		focus: {
			borderColor: color.grey[7],
		},
	},
};
