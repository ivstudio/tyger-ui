export interface ButtonRootProps {
    orientation?: 'horizontal' | 'vertical';
}

export interface ButtonGroupProps extends ButtonRootProps {
    children: React.ReactNode[];
}
