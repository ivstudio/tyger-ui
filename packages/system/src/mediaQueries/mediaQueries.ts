export const breakpoint = {
    xs: '0px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1536px',
};

export const device = {
    xs: `(min-width: ${breakpoint.xs})`,
    sm: `(min-width: ${breakpoint.sm})`,
    md: `(min-width: ${breakpoint.md})`,
    lg: `(min-width: ${breakpoint.lg})`,
    xl: `(min-width: ${breakpoint.xl})`,
};

export type TBreakpoints = typeof breakpoint;
export type TBreakpointKey = keyof TBreakpoints;

export default {
    breakpoint,
    device,
};
