'use client';
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
    disabled?: boolean;
}

const sizes = {
    sm: {
        height: 24,
        padding: `0 8px`,
    },
    md: {
        height: 32,
        padding: `0 12px`,
    },
} as const;

export const ChipRoot = styled.div<{
    size: TSize;
    variant: TChipVariant;
    disabled: boolean;
}>`
    outline: 0;
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: middle;
    box-sizing: border-box;
    font-size: 0.8125rem;
    border-radius: 16px;
    ${flexCenterInline};
    ${({ size }) => sizes[size]};

    ${({ theme, variant, disabled }) => {
        if (!theme || !variant) return null;
        const { chip } = theme;
        switch (variant) {
            case 'outlined':
                return disabled
                    ? {
                          color: chip.outlined.disabled.color,
                          background: chip.outlined.disabled.backgroundColor,
                          border: `1px solid ${chip.outlined.disabled.border}`,
                      }
                    : {
                          color: chip.outlined.color,
                          background: chip.outlined.backgroundColor,
                          border: `1px solid ${chip.outlined.border}`,
                      };
            case 'filled':
            default:
                return disabled
                    ? {
                          color: chip.filled.disabled.color,
                          background: chip.filled.disabled.backgroundColor,
                      }
                    : {
                          color: chip.filled.color,
                          background: chip.filled.backgroundColor,
                      };
        }
    }}
`;

export const ChipButtonRoot = styled(ChipRoot)`
    ${buttonBase};
    text-transform: none;

    ${({ theme }) => {
        if (!theme) return null;
        const { chip } = theme;

        return {
            color: chip.button.color,
            background: chip.button.backgroundColor,
            '&:hover': {
                background: chip.button.hover.backgroundColor,
            },
            '&:disabled': {
                color: chip.button.disabled.color,
                background: chip.button.disabled.backgroundColor,
            },
        };
    }}
`;

const Chip = ({
    id,
    label,
    size = 'md',
    tag = 'span',
    onClick,
    variant = 'filled',
    className,
    disabled = false,
}: IChip) => {
    if (tag === 'button') {
        return (
            <ChipButtonRoot
                id={id}
                as="button"
                type="button"
                size={size}
                onClick={onClick}
                variant={variant}
                className={className}
                disabled={disabled}
            >
                {label}
            </ChipButtonRoot>
        );
    }

    return (
        <ChipRoot
            id={id}
            as={tag}
            size={size}
            variant={variant}
            className={className}
            disabled={disabled}
        >
            {label}
        </ChipRoot>
    );
};

export default Chip;
