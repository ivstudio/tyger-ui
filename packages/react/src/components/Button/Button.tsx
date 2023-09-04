'use client';
import * as React from 'react';
import styled from 'styled-components';

import {
    backgroundTransition,
    buttonBase,
    flexCenterInline,
} from '../../styles';
import Box from '../Box';
import { ButtonProps, ButtonRootProps } from './Button.types';

const buttonSpacing = {
    text: {
        base: {
            sm: `4px 5px`,
            md: `6px 8px`,
            lg: `8px 11px`,
        },
        startIcon: {
            sm: `4px 5px 4px 2px`,
            md: `6px 8px 6px 5px`,
            lg: `8px 11px 8px 6px`,
        },
        endIcon: {
            sm: `4px 2px 4px 5px`,
            md: `6px 5px 6px 8px`,
            lg: `8px 6px 8px 11px`,
        },
    },
    outline: {
        base: {
            sm: `3px 9px`,
            md: `5px 15px`,
            lg: `7px 21px`,
        },
        startIcon: {
            sm: `3px 9px 3px 6px`,
            md: `5px 15px 5px 12px`,
            lg: `7px 21px 7px 16px`,
        },
        endIcon: {
            sm: `3px 6px 3px 9px`,
            md: `5px 12px 5px 15px`,
            lg: `7px 16px 7px 21px`,
        },
    },
    filled: {
        base: {
            sm: `4px 10px`,
            md: `6px 16px`,
            lg: `8px 22px`,
        },
        startIcon: {
            sm: `4px 10px 4px 6px`,
            md: `6px 16px 6px 12px`,
            lg: `8px 22px 8px 16px`,
        },
        endIcon: {
            sm: `4px 6px 4px 10px`,
            md: `6px 12px 6px 16px`,
            lg: `8px 16px 8px 22px`,
        },
    },
} as const;

const fonButtonSizess = {
    sm: {
        fonButtonSizes: '0.8125rem',
        '& svg': {
            fonButtonSizes: '16px',
        },
    },

    md: {
        fonButtonSizes: '0.875rem',
        '& svg': {
            fonButtonSizes: '20px',
        },
    },

    lg: {
        fonButtonSizes: '0.9375rem',
        '& svg': {
            fonButtonSizes: '24px',
        },
    },
} as const;

const roundedCorners = {
    sm: '18px',
    md: '18px',
    lg: '22px',
} as const;

const iconSpacing = {
    sm: '4px',
    md: '4px',
    lg: '6px',
} as const;

const ButtonRoot = styled.button<ButtonRootProps>`
    ${flexCenterInline};
    ${buttonBase};
    ${backgroundTransition};
    min-width: 64px;
    font-weight: 500;
    letter-spacing: 0.02857em;
    ${({ size }) => fonButtonSizess[size]};
    line-height: ${({ theme }) => theme.lineHeight.xl};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    border-radius: ${({ rounded, size }) => {
        return rounded ? roundedCorners[size] : '4px';
    }};
    ${({ theme, variant, size, hasStartIcon, hasEndIcon }) => {
        if (!theme || !variant) return null;
        const { button } = theme;
        const spacingType = hasStartIcon
            ? 'startIcon'
            : hasEndIcon
            ? 'endIcon'
            : 'base';

        switch (variant) {
            case 'text':
                return {
                    color: button.text.color,
                    background: button.text.backgroundColor,
                    padding: buttonSpacing.text[spacingType][size],
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
                    padding: buttonSpacing.outline[spacingType][size],
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
                    padding: buttonSpacing.filled[spacingType][size],
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
}: ButtonProps) => (
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
        hasStartIcon={startIcon !== null}
        hasEndIcon={endIcon !== null}
    >
        {startIcon && !endIcon && (
            <Box
                tag="span"
                styles={{ marginRight: children ? iconSpacing[size] : '0' }}
                flexCenterInline
            >
                {startIcon}
            </Box>
        )}
        {children && children}
        {endIcon && !startIcon && (
            <Box
                tag="span"
                styles={{ marginLeft: children ? iconSpacing[size] : '0' }}
                flexCenterInline
            >
                {endIcon}
            </Box>
        )}
    </ButtonRoot>
);

export default Button;
