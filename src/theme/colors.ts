export const color = {
    blue: [
        '#F0F9FF',
        '#D1EDFF',
        '#A8D9FF',
        '#75BFFF',
        '#57ABFF',
        '#2D8EFF',
        '#1C6ED9',
        '#0E50B3',
        '#04368C',
        '#022366',
    ],
    grey: [
        '#ffffff',
        '#fafafa',
        '#f5f5f5',
        '#f0f0f0',
        '#d9d9d9',
        '#bfbfbf',
        '#8c8c8c',
        '#595959',
        '#434343',
        '#262626',
        '#1f1f1f',
        '#141414',
        '#000000',
    ],
    warning: [
        '#FFFDF0',
        '#FFFBE0',
        '#FFF3B8',
        '#FFE98F',
        '#FFDB66',
        '#FFCC3D',
        '#D9A429',
        '#B37F19',
        '#8C5D0D',
        '#664008',
    ],
    negative: [
        '#FFF3F0',
        '#FFE5E0',
        '#FFCAC4',
        '#FFA29C',
        '#FF7773',
        '#FF4949',
        '#D9343A',
        '#B3222C',
        '#8C1420',
        '#660D19',
    ],
    positive: [
        '#E6FFED',
        '#BAFFD0',
        '#8CF5B0',
        '#5FE894',
        '#37DB7B',
        '#13CE66',
        '#07A855',
        '#008243',
        '#005C32',
        '#00361F',
    ],
};

export const lightPalette = {
    name: 'lightTheme',
    backgroundColor: color.grey[0],
    palette: {
        primary: color.blue[5],
        border: color.grey[2],
        button: {
            primary: {
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
        surface: {
            primary: color.grey[1],
        },
        ui: {
            primary: color.grey[9],
        },
        text: {
            primary: color.grey[9],
            outlined: color.grey[1],
        },
    },
    bg: {
        primary: '#eff0f5',
        secondary: '#ffffff',
        inset: '#e2e4e8',
        input: 'rgba(65,67,78,0.12)',
        appBar: color.grey[0],
    },
    text: {
        primary: color.grey[9],
        secondary: '#2f3037',
        tertiary: '#525560',
        quarternary: '#9194a1',
        placeholder: 'rgba(82,85,96,0.5)',
        onPrimary: '#ffffff',
    },
};

export const darkPalette = {
    name: 'darkTheme',
    backgroundColor: color.grey[9],
    palette: {
        primary: color.blue[5],
        border: color.grey[2],
        button: {
            primary: {
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
        surface: {
            primary: color.grey[11],
        },
        ui: {
            primary: color.grey[1],
        },
        text: {
            primary: color.grey[9],
            secondary: color.grey[4],
        },
    },
    bg: {
        primary: '#050505',
        secondary: color.grey[9],
        inset: '#111111',
        input: 'rgba(191,193,201,0.12)',
        appBar: color.grey[9],
    },
    text: {
        primary: color.grey[0],
        secondary: '#e3e4e8',
        tertiary: '#a9abb6',
        quarternary: '#6c6f7e',
        placeholder: 'rgba(145,148,161,0.5)',
        onPrimary: '#050505',
    },
};
