import React from 'react';

import { longParagraph } from '../../../test/fixtures';
import { render } from '../../../test/utils/mockProvider';
import Container from './Container';

describe('Container', () => {
    it('renders Container correctly', () => {
        const { container } = render(<Container>{longParagraph}</Container>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correct element tag', () => {
        const { container } = render(<Container>{longParagraph}</Container>);

        expect(container.querySelector('div')).toBeInTheDocument();

        // rerender(<Container tag="section">{longParagraph}</Container>);
        // expect(container.querySelector('section')).toBeInTheDocument();

        // rerender(<Container tag="span">{longParagraph}</Container>);
        // expect(container.querySelector('span')).toBeInTheDocument();
    });

    // it('has correct width', () => {
    //     const { container, rerender } = render(
    //         <Container maxWidth="sm">{longParagraph}</Container>
    //     );

    //     expect(container.firstElementChild).toHaveStyle(
    //         `max-width: ${breakpoint.sm}`
    //     );

    //     rerender(<Container maxWidth="lg">{longParagraph}</Container>);
    //     expect(container.firstElementChild).toHaveStyle(
    //         `max-width: ${breakpoint.lg}`
    //     );
    // });
});
