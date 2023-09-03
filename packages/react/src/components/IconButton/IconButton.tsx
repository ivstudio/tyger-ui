'use client';
import styled, { useTheme } from 'styled-components';

import {
    backgroundTransition,
    buttonBase,
    flexCenterInline,
} from '../../styles';
import {
    IconButtonProps,
    IconRootProps,
    IconsButtonsSizes,
} from './IconButton.d';

const getSize = (size: IconsButtonsSizes = 'sm') => {
    const buttonSizes = {
        sm: 4,
        md: 6,
        lg: 8,
    };
    const iconSizes = {
        sm: 24,
        md: 32,
        lg: 40,
    };
    return {
        padding: buttonSizes[size],
        fontSize: iconSizes[size],
    };
};

export const IconButtonRoot = styled.button<IconRootProps>`
    ${({ size }) => getSize(size)};
    color: ${({ color }) => color};
    background-color: ${({ background, filled }) => {
        return filled ? background : 'transparent';
    }};
    border-radius: 50%;
    overflow: hidden;
    ${buttonBase};
    ${backgroundTransition};
    ${flexCenterInline};
    -webkit-tap-highlight-color: transparent;

    &:hover {
        background-color: ${({ background }) => background};
    }

    &:disabled {
        color: ${({ theme: { iconButton } }) => iconButton.disabled.color};
    }
`;

const IconButton = ({
    children,
    onClick,
    size = 'sm',
    disabled = false,
    background,
    color,
    filled = false,
    className,
    ...baseProps
}: IconButtonProps) => {
    const { iconButton } = useTheme();

    return (
        <IconButtonRoot
            {...baseProps}
            className={className}
            onClick={onClick}
            size={size}
            disabled={disabled}
            background={background || iconButton.hover.backgroundColor}
            color={color || iconButton.color}
            filled={filled}
        >
            {children}
        </IconButtonRoot>
    );
};

export default IconButton;
