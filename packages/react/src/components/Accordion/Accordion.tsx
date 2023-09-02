'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const AccordionRoot = styled.section`
    width: 100%;
`;

export const AccordionItemRoot = styled.div`
    border-radius: 2px;
`;

export const SummaryContainer = styled.div<{ expanded: boolean }>`
    cursor: pointer;
    display: flex;
`;

export const SummaryContent = styled.div`
    font-size: 18px;
    font-weight: 600;
    flex: 1;
`;

export const DetailsContainer = styled(motion.div)`
    font-size: 18px;
`;

export const IconContainer = styled.div`
    padding-top: 3px;
`;

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

const Accordion = ({ children, expandedId = '', onClick }: IAccordion) => {
    const toggle = (id: string) => onClick(id);

    return (
        <AccordionRoot>
            {React.Children.map(children, child => {
                const { id } = child.props.children[0].props;
                const isExpanded = expandedId === id;
                const summaryItem = React.cloneElement(
                    child.props.children[0],
                    {
                        toggle,
                        isExpanded,
                    }
                );

                return (
                    <AccordionItem>
                        {summaryItem}
                        <AnimatePresence initial={false}>
                            {isExpanded && child.props.children[1]}
                        </AnimatePresence>
                    </AccordionItem>
                );
            })}
        </AccordionRoot>
    );
};

const AccordionDetails = ({ children }: IAccordionDetails) => (
    <DetailsContainer
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={{
            open: { opacity: 1, height: 'auto' },
            collapsed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.15, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
        {children}
    </DetailsContainer>
);

const AccordionSummary = ({
    id,
    children,
    toggle,
    isExpanded = false,
}: IAccordionSummary) => (
    <SummaryContainer
        onClick={() => toggle && toggle(isExpanded ? '' : id)}
        expanded={isExpanded}
    >
        <SummaryContent>{children}</SummaryContent>
        <IconContainer>{isExpanded ? ' close' : 'open'}</IconContainer>
    </SummaryContainer>
);

const AccordionItem = ({ children }: IAccordionItem) => <>{children}</>;

Accordion.Details = AccordionDetails;
Accordion.Summary = AccordionSummary;
Accordion.Item = AccordionItem;

export default Accordion;
