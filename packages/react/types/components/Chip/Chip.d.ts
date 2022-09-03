/// <reference types="react" />
export declare type TSize = 'sm' | 'md';
declare type TChipVariant = 'filled' | 'outlined';
declare type TChipTags = 'span' | 'div' | 'button';
interface IChip {
    id?: string;
    tag?: TChipTags;
    size?: TSize;
    label: React.ReactNode;
    onClick?: () => void;
    variant?: TChipVariant;
    className?: string;
    disabled?: boolean;
}
export declare const ChipRoot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    size: TSize;
    variant: TChipVariant;
    disabled: boolean;
}, never>;
export declare const ChipButtonRoot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    size: TSize;
    variant: TChipVariant;
    disabled: boolean;
}, never>;
declare const Chip: ({ id, label, size, tag, onClick, variant, className, disabled, }: IChip) => JSX.Element;
export default Chip;
