import styled from 'styled-components';

export type TSize = 'sm' | 'md' | 'lg';

interface ISwitch {
    id?: string;
    checked: boolean;
    size?: TSize;
    onChange: (val: boolean) => void;
}

const getSize = (size: TSize) => {
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

export const Container = styled.div`
    position: relative;
    user-select: none;
`;

export const Checkbox = styled.input`
    display: none;
`;

export const Thumb = styled.label<{ checked: boolean; size: TSize }>`
    cursor: pointer;
    margin: 0;
    padding: 0;
    line-height: 1;
    border-radius: 100px;
    display: block;
    position: relative;
    box-sizing: border-box;
    transition: background-color 0.1s ease;
    background-color: ${({ checked, theme: { color } }) =>
        checked ? color.grey[6] : color.grey[2]};
    ${({ size }) => getSize(size)};

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

const Switch = ({ id, onChange, checked = false, size = 'md' }: ISwitch) => (
    <Container>
        <Checkbox
            id={id}
            type="checkbox"
            checked={checked}
            onChange={() => onChange(!checked)}
        />
        <Thumb htmlFor={id} checked={checked} size={size} />
    </Container>
);
export default Switch;
