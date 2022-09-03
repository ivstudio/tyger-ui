import { ReactNode } from 'react';
export declare const AccordionRoot: import("styled-components").StyledComponent<"section", import("styled-components").DefaultTheme, {}, never>;
export declare const AccordionItemRoot: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const SummaryContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    expanded: boolean;
}, never>;
export declare const SummaryContent: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const DetailsContainer: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLDivElement, import("framer-motion").HTMLMotionProps<"div">>, import("styled-components").DefaultTheme, {}, never>;
export declare const IconContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
interface IAccordion {
    children: JSX.Element | JSX.Element[];
    expandedId?: string;
    onClick: (expandedId: string) => void;
}
interface IAccordionItem {
    children: JSX.Element | JSX.Element[];
}
interface IAccordionDetails {
    children?: ReactNode | ReactNode[];
}
interface IAccordionSummary {
    id: string;
    children?: ReactNode | ReactNode[];
    toggle?: (id: string) => void;
    isExpanded?: boolean;
}
declare const Accordion: {
    ({ children, expandedId, onClick }: IAccordion): JSX.Element;
    Details: ({ children }: IAccordionDetails) => JSX.Element;
    Summary: ({ id, children, toggle, isExpanded, }: IAccordionSummary) => JSX.Element;
    Item: ({ children }: IAccordionItem) => JSX.Element;
};
export default Accordion;
