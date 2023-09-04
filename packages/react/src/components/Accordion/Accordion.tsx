'use client';
import { AnimatePresence } from 'framer-motion';
import React from 'react';

import {
    AccordionRoot,
    DetailsContainer,
    IconContainer,
    SummaryContainer,
    SummaryContent,
} from './Accordion.styles';
import {
    AccordionDetailsProps,
    AccordionItemProps,
    AccordionProps,
    AccordionSummaryProps,
} from './Accordion.types';

const Accordion = ({ children, expandedId = '', onClick }: AccordionProps) => {
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

const AccordionDetails = ({ children }: AccordionDetailsProps) => (
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
}: AccordionSummaryProps) => (
    <SummaryContainer
        onClick={() => toggle && toggle(isExpanded ? '' : id)}
        expanded={isExpanded}
    >
        <SummaryContent>{children}</SummaryContent>
        <IconContainer>{isExpanded ? ' close' : 'open'}</IconContainer>
    </SummaryContainer>
);

const AccordionItem = ({ children }: AccordionItemProps) => <>{children}</>;

Accordion.Details = AccordionDetails;
Accordion.Summary = AccordionSummary;
Accordion.Item = AccordionItem;

export default Accordion;
