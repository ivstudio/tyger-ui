import styled from 'styled-components';

import { buttonBase, flexCenterInline } from '../../styles';

export type TSize = 'sm' | 'md';

type TChipVariant = 'filled' | 'outlined';

type TChipTags = 'span' | 'div' | 'button';

interface IChip {
    id?: string;
    tag?: TChipTags;
    size?: TSize;
    label: React.ReactNode;
    onClick?: () => void;
    variant?: TChipVariant;
    className?: string;
}

const sizes = {
    sm: {
        height: 24,
        borderRadius: 16,
        padding: `0 8px`,
        fontSize: 12,
    },
    md: {
        height: 32,
        borderRadius: 16,
        padding: `0 12px`,
        fontSize: 14,
    },
} as const;

export const ChipRoot = styled.div<{ size: TSize; variant: TChipVariant }>`
    outline: 0;
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: middle;
    box-sizing: border-box;
    ${flexCenterInline};
    ${({ size }) => sizes[size]};
    border: ${({ theme: { palette }, variant }) => {
        return variant === 'outlined' && `1px solid ${palette.border}`;
    }};
    background: ${({ theme: { palette }, variant }) => {
        return variant === 'filled' && palette.ui.primary;
    }};
    color: ${({ theme: { palette } }) => palette.text.primary};
`;

export const ChipButton = styled(ChipRoot)`
    ${buttonBase};
    text-transform: none;
    &:hover {
        background-color: ${({ theme: { bg } }) => bg.input};
    }
`;

const Chip = ({
    id,
    label,
    size = 'md',
    tag = 'span',
    onClick,
    variant = 'filled',
    className,
}: IChip) => {
    if (tag === 'button') {
        return (
            <ChipButton
                id={id}
                as="button"
                type="button"
                size={size}
                onClick={onClick}
                variant={variant}
                className={className}
            >
                {label}
            </ChipButton>
        );
    }

    return (
        <ChipRoot
            id={id}
            as={tag}
            size={size}
            variant={variant}
            className={className}
        >
            {label}
        </ChipRoot>
    );
};

export default Chip;
