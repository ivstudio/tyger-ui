/*
    Xn = Xn-1 + {INT[(n-2)/4] + 1} * 2
    Xn: step n type size Xn-1: step n-1 type size
    Formula by: Carbon Design System
*/
const scale = {
    '15': '5.75',
    '14': '5.25',
    '13': '4.75',
    '12': '4.25',
    '11': '3.75',
    '10': '3.375',
    '9': '3',
    '8': '2.625',
    '7': '2.25',
    '6': '2em',
    '5': '1.75em',
    '4': '1.5em',
    '3': '1.25em',
    '2': '1.125em',
    '1': '1em',
    '-1': '.875em',
    '-2': '0.75em',
};

export const htmlTextElements = {
    h1: {
        fontSize: scale['6'],
    },
    h2: {
        fontSize: scale['5'],
    },
    h3: {
        fontSize: scale['4'],
    },
    h4: {
        fontSize: scale['3'],
    },
    h5: {
        fontSize: scale['2'],
    },
    h6: {
        fontSize: scale['1'],
    },
    p: {
        fontSize: scale['1'],
    },
    div: {
        fontSize: scale['1'],
    },
    span: {
        fontSize: scale['1'],
    },
    li: {
        fontSize: scale['1'],
    },
} as const;

export const textStyles = {
    body: {
        fontSize: scale['1'],
    },
    body1: {
        fontSize: scale['-1'],
        fontWeight: 'normal',
    },
    lead: {
        fontSize: scale['3'],
        fontWeight: '300',
    },
    title: {
        fontSize: scale['5'],
        fontWeight: '700',
    },
    subheading: {
        fontSize: scale['4'],
    },
    label: {
        fontSize: scale['1'],
    },
    footnote: {
        fontSize: scale['-2'],
    },
} as const;

export const typographyVariants = { ...htmlTextElements, ...textStyles };

export type TVariant = keyof typeof textStyles | keyof typeof htmlTextElements;
// export type TVariantKey = typeof typographyVariants[TVariant];
