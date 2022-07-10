import * as React from 'react';
import styled, { css } from 'styled-components';

export type TButtonVariant = 'primary' | 'outlined' | 'text';
export type TSize = 'sm' | 'md' | 'lg';

export interface IButton {
    id?: string;
    className?: string;
    type?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    size?: TSize;
    fullWidth?: boolean;
    children: React.ReactNode | React.ReactNode[];
    variant?: TButtonVariant;
    rounded?: boolean;
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const sizes = {
    sm: {
        fontSize: '0.8125rem',
        padding: `3px 9px`,
    },

    md: {
        fontSize: '0.875rem',
        padding: `5px 15px`,
    },

    lg: {
        fontSize: '0.9375rem',
        padding: `8px 22px`,
    },
} as const;

const roundedCorners = {
    sm: '14px',
    md: '18px',
    lg: '22px',
} as const;

const buttonBase = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    appearance: none;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;
    outline: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    white-space: nowrap;
    -webkit-box-pack: center;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.25s ease, color 0.25s ease;
    min-width: 64px;
    font-weight: 500;
    letter-spacing: 0.02857em;

    &:disabled {
        pointer-events: none;
    }
`;

const ButtonRoot = styled.button<{
    size: TSize;
    fullWidth: boolean;
    variant: TButtonVariant;
    rounded: boolean;
}>`
    ${buttonBase};
    ${({ size }) => sizes[size]};
    line-height: ${({ theme }) => theme.lineHeight.xl};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    border-radius: ${({ rounded, size }) => {
        return rounded ? roundedCorners[size] : '4px';
    }};
    ${({ theme, variant }) => {
        if (!theme || !variant) return null;
        const { button } = theme.palette;
        switch (variant) {
            case 'text':
                return {
                    color: button.text.color,
                    background: button.text.backgroundColor,
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
            case 'primary':
            default:
                return {
                    color: button.primary.color,
                    background: button.primary.backgroundColor,
                    '&:hover': {
                        background: button.primary.hover.backgroundColor,
                    },
                    '&:disabled': {
                        color: button.primary.disabled.color,
                        background: button.primary.disabled.backgroundColor,
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
    variant = 'primary',
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
        {children}
    </ButtonRoot>
);

export default Button;
