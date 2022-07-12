import * as React from 'react';
import styled from 'styled-components';

import {
    backgroundTransition,
    buttonBase,
    flexCenterInline,
} from '../../styles';
import Box from '../Box';

export type TButtonVariant = 'filled' | 'outlined' | 'text';
export type TSize = 'sm' | 'md' | 'lg';

export interface IButton {
    id?: string;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    size?: TSize;
    fullWidth?: boolean;
    children?: React.ReactNode;
    variant?: TButtonVariant;
    rounded?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const fontSizes = {
    sm: {
        fontSize: '0.8125rem',
        '& svg': {
            fontSize: '16px',
        },
    },

    md: {
        fontSize: '0.875rem',
        '& svg': {
            fontSize: '20px',
        },
    },

    lg: {
        fontSize: '0.9375rem',
        '& svg': {
            fontSize: '24px',
        },
    },
} as const;

const buttonSpacing = {
    text: {
        sm: `4px 5px`,
        md: `6px 8px`,
        lg: `8px 11px`,
    },
    outline: {
        sm: `3px 9px`,
        md: `5px 15px`,
        lg: `7px 21px`,
    },
    filled: {
        sm: `4px 10px`,
        md: `6px 16px`,
        lg: `8px 22px`,
    },
} as const;

const roundedCorners = {
    sm: '14px',
    md: '18px',
    lg: '22px',
} as const;

const iconSpacing = {
    sm: '4',
    md: '4',
    lg: '8',
} as const;

const ButtonRoot = styled.button<{
    size: TSize;
    fullWidth: boolean;
    variant: TButtonVariant;
    rounded: boolean;
}>`
    ${flexCenterInline};
    ${buttonBase};
    ${backgroundTransition};
    min-width: 64px;
    font-weight: 500;
    letter-spacing: 0.02857em;
    ${({ size }) => fontSizes[size]};
    line-height: ${({ theme }) => theme.lineHeight.xl};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    border-radius: ${({ rounded, size }) => {
        return rounded ? roundedCorners[size] : '4px';
    }};
    ${({ theme, variant, size }) => {
        if (!theme || !variant) return null;
        const { button } = theme.palette;
        switch (variant) {
            case 'text':
                return {
                    color: button.text.color,
                    background: button.text.backgroundColor,
                    padding: buttonSpacing.text[size],
                    '&:hover': {
                        background: button.text.hover.backgroundColor,
                    },
                    '&:disabled': {
                        color: button.text.disabled.color,
                        background: button.text.backgroundColor,
                    },
                };
            case 'outlined':
                return {
                    color: button.outlined.color,
                    background: button.outlined.backgroundColor,
                    padding: buttonSpacing.outline[size],
                    border: `1px solid ${button.outlined.border}`,
                    '&:hover': {
                        background: button.outlined.hover.backgroundColor,
                        border: `1px solid ${button.outlined.hover.border}`,
                    },
                    '&:disabled': {
                        color: button.outlined.disabled.color,
                        background: button.outlined.disabled.backgroundColor,
                        border: `1px solid ${button.outlined.disabled.border}`,
                    },
                };
            case 'filled':
            default:
                return {
                    color: button.filled.color,
                    background: button.filled.backgroundColor,
                    padding: buttonSpacing.filled[size],
                    '&:hover': {
                        background: button.filled.hover.backgroundColor,
                    },
                    '&:disabled': {
                        color: button.filled.disabled.color,
                        background: button.filled.disabled.backgroundColor,
                    },
                };
        }
    }}
`;

const Button = ({
    id,
    children,
    type = 'button',
    disabled = false,
    size = 'md',
    className,
    fullWidth = false,
    rounded = true,
    variant = 'filled',
    startIcon = null,
    endIcon = null,
    ...baseProps
}: IButton) => (
    <ButtonRoot
        {...baseProps}
        id={id}
        type={type}
        size={size}
        disabled={disabled}
        className={className}
        fullWidth={fullWidth}
        variant={variant}
        rounded={rounded}
    >
        {startIcon && (
            <Box
                tag="span"
                mr={children ? iconSpacing[size] : '0'}
                flexCenterInline
            >
                {startIcon}
            </Box>
        )}
        {children && children}
        {endIcon && (
            <Box
                tag="span"
                ml={children ? iconSpacing[size] : '0'}
                flexCenterInline
            >
                {endIcon}
            </Box>
        )}
    </ButtonRoot>
);

export default Button;
