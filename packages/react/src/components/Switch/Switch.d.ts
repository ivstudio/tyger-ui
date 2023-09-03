export type SwitchSizes = 'sm' | 'md' | 'lg';

export interface SwitchRootProps {
    checked: boolean;
    size?: SwitchSizes;
}

export interface SwitchProps extends SwitchRootProps {
    id?: string;
    disabled?: boolean;
    onChange: (val: boolean) => void;
}
