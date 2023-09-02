'use client';
import styled from 'styled-components';

import useProgress from './useScrollIndicator';

const Container = styled.div`
    width: 100%;
    height: 2px;
    position: fixed;
    top: 0;
`;

const ProgressBar = styled.div`
    height: 2px;
    transition: width 0.5s ease;
    background: ${({ theme }) => theme.backgroundColor};
`;

const ScrollIndicator = () => {
    const [progress] = useProgress();

    return (
        <Container>
            <ProgressBar style={{ width: `${progress}%` }} />
        </Container>
    );
};

export default ScrollIndicator;
