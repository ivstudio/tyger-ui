import { ReactNode } from 'react';

export type AccordionProps = {
    children: JSX.Element | JSX.Element[];
    expandedId?: string;
    onClick: (expandedId: string) => void;
};

export type AccordionItemProps = {
    children: JSX.Element | JSX.Element[];
};

export type AccordionDetailsProps = {
    children?: ReactNode | ReactNode[];
};

export type AccordionSummaryProps = {
    id: string;
    children?: ReactNode | ReactNode[];
    toggle?: (id: string) => void;
    isExpanded?: boolean;
};
