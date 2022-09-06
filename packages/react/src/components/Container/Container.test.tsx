import React from 'react';
import Container from './Container';
import { render } from '../../../test/utils/mockProvider';
import { LongTextFixture } from '../../../test/fixtures';
import { breakpoint } from '../../styles/mediaQueries';

describe('Container', () => {
    it('renders Container correctly', () => {
        const { container } = render(<Container>{LongTextFixture}</Container>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correct element tag', () => {
        const { container, rerender } = render(
            <Container>{LongTextFixture}</Container>
        );
        expect(container.querySelector('div')).toBeInTheDocument();

        rerender(<Container tag="section">{LongTextFixture}</Container>);
        expect(container.querySelector('section')).toBeInTheDocument();

        rerender(<Container tag="span">{LongTextFixture}</Container>);
        expect(container.querySelector('span')).toBeInTheDocument();
    });

    it('has correct width', () => {
        const { container, rerender } = render(
            <Container maxWidth="sm">{LongTextFixture}</Container>
        );

        expect(container.firstElementChild).toHaveStyle(
            `max-width: ${breakpoint.sm}`
        );

        rerender(<Container maxWidth="lg">{LongTextFixture}</Container>);
        expect(container.firstElementChild).toHaveStyle(
            `max-width: ${breakpoint.lg}`
        );
    });
});