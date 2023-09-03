export interface BackdropProps {
    children?: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
    open?: boolean;
    duration?: number;
    base?: boolean;
    key?: string;
    transparent?: boolean;
    zIndex?: string;
}
