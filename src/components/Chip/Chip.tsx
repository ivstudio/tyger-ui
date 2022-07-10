import styled from 'styled-components';

import { buttonBase, flexCenterInline } from '../../styles';

export type TSize = 'sm' | 'md';

type TChipVariant = 'contained' | 'outlined';

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
    ${flexCenterInline};
    ${({ size }) => sizes[size]};

    ${({ theme, variant, disabled }) => {
        if (!theme || !variant) return null;
        const { chip } = theme.palette;
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
            case 'contained':
            default:
                return disabled
                    ? {
                          color: chip.contained.disabled.color,
                          background: chip.contained.disabled.backgroundColor,
                      }
                    : {
                          color: chip.contained.color,
                          background: chip.contained.backgroundColor,
                      };
        }
    }}
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
    variant = 'contained',
    className,
    disabled = false,
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
                disabled={disabled}
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
            disabled={disabled}
        >
            {label}
        </ChipRoot>
    );
};

export default Chip;
