export declare type TSize = 'sm' | 'md' | 'lg';
interface TSwitchRoot {
    checked: boolean;
    size?: TSize;
}
interface ISwitch extends TSwitchRoot {
    id?: string;
    disabled?: boolean;
    onChange: (val: boolean) => void;
}
declare const Switch: ({ id, onChange, checked, size, disabled, }: ISwitch) => JSX.Element;
export default Switch;
