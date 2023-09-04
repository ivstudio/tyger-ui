export type DrawerAnchor = 'top' | 'right' | 'bottom' | 'left';

interface DrawerRootProps {
    children: React.ReactNode | React.ReactNode[];
    open: boolean;
    onClose: () => void;
    anchor?: DrawerAnchor;
}

export interface DrawerProps extends DrawerRootProps {
    title?: string;
}
