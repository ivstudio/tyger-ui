export type ChipSizes = 'sm' | 'md';

export type ChipVariant = 'filled' | 'outlined';

type ChipTags = 'span' | 'div' | 'button';

export interface ChipProps {
    id?: string;
    tag?: ChipTags;
    size?: ChipSizes;
    label: React.ReactNode;
    onClick?: () => void;
    variant?: ChipVariant;
    className?: string;
    disabled?: boolean;
}
