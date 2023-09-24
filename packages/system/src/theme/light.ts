import color, { opacityHex } from '../color';

export const light = {
	primary: color.blue[5],
	backgroundColor: color.grey[2],
	paper: color.grey[0],
	border: color.grey[3],
	text: {
		primary: color.grey[9],
		secondary: '#2f3037',
		tertiary: '#525560',
		quarternary: '#9194a1',
		placeholder: color.grey[5],
		error: color.negative[6],
		disabled: color.grey[4],
		label: color.grey[7],
	},
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
	drawer: {
		backgroundColor: color.grey[0],
		border: color.grey[4],
		color: color.grey[9],
	},
	textfield: {
		borderColor: color.grey[4],
		backgroundColor: color.grey[1],
		focus: {
			borderColor: color.grey[5],
		},
	},
};
