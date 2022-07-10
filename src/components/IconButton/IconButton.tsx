import styled, { useTheme } from 'styled-components';

import {
    backgroundTransition,
    buttonBase,
    flexCenterInline,
} from '../../styles';

export type TSize = 'sm' | 'md' | 'lg';

interface IIconRoot {
    size?: TSize;
    color?: string;
    background?: string;
    filled?: boolean;
}
interface IIconButton extends IIconRoot {
    children: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

const getSize = (size: TSize = 'sm') => {
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

export const IconButtonRoot = styled.button<IIconRoot>`
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
}: IIconButton) => {
    const { palette } = useTheme();

    return (
        <IconButtonRoot
            {...baseProps}
            className={className}
            onClick={onClick}
            size={size}
            disabled={disabled}
            background={background || palette.ui.primary}
            color={color || palette.text.secondary}
            filled={filled}
        >
            {children}
        </IconButtonRoot>
    );
};

export default IconButton;
