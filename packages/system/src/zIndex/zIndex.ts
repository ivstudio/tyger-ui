const zIndex = {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
} as const;

export type TZIndex = keyof typeof zIndex;
export default zIndex;
