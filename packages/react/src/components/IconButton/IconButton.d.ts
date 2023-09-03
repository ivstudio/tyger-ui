export type IconsButtonsSizes = 'sm' | 'md' | 'lg';

export interface IconRootProps {
    size?: IconsButtonsSizes;
    color?: string;
    background?: string;
    filled?: boolean;
}

export interface IconButtonProps extends IconRootProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
