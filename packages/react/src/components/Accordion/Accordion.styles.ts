import { motion } from 'framer-motion';
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
