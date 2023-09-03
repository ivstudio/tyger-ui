'use client';
import styled from 'styled-components';

import { SwitchProps, SwitchRootProps, SwitchSizes } from './Switch.d';

const getSize = (size: SwitchSizes) => {
    const buttonSizes = {
        sm: 16,
        md: 24,
        lg: 40,
    };
    const thumbSizes = {
        sm: 12,
        md: 20,
        lg: 36,
    };
    return {
        width: buttonSizes[size] * 2,
        height: buttonSizes[size],
        [`&:before`]: {
            width: thumbSizes[size],
            height: thumbSizes[size],
        },
    };
};

const Container = styled.div<{ disabled: boolean }>`
    ${({ disabled }) =>
        disabled && {
            pointerEvents: 'none',
            opacity: 0.2,
        }};
    position: relative;
    user-select: none;
`;

const Checkbox = styled.input`
    display: none;
`;

const Thumb = styled.label<SwitchRootProps>`
    cursor: pointer;
    margin: 0;
    padding: 0;
    line-height: 1;
    border-radius: 100px;
    display: block;
    position: relative;
    box-sizing: border-box;
    transition: background-color 0.1s ease;
    background-color: ${({ checked, theme }) => {
        const { on, off } = theme.switch;
        return checked ? on.backgroundColor : off.backgroundColor;
    }};
    ${({ size }) => size && getSize(size)};
    &:before {
        content: '';
        margin: 0px;
        background: ${({ theme: { color } }) => color.grey[0]};
        position: absolute;
        top: 2px;
        box-shadow: 0 1px 4px 0 rgba(52, 59, 70, 0.5);
        border-radius: 50%;
        transition: all 0.15s ease;
        left: ${({ checked }) => (checked ? 'calc(100% - 2px)' : '2px')};
        transform: ${({ checked }) => (checked ? 'translateX(-100%)' : 'none')};
    }
`;

const Switch = ({
    id,
    onChange,
    checked = false,
    size = 'md',
    disabled = false,
}: SwitchProps) => {
    return (
        <Container disabled={disabled}>
            <Checkbox
                id={id}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={() => onChange(!checked)}
            />
            <Thumb htmlFor={id} checked={checked} size={size} />
        </Container>
    );
};
export default Switch;
