import { breakpoint } from '@tyger-ui/system/src/mediaQueries';
import React from 'react';

import { lgTextFixture } from '../../../test/fixtures';
import { render } from '../../../test/utils/mockProvider';
import Container from './Container';

describe('Container', () => {
    it('renders Container correctly', () => {
        const { container } = render(<Container>{lgTextFixture}</Container>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders correct element tag', () => {
        const { container, rerender, debug } = render(
            <Container>{lgTextFixture}</Container>
        );

        expect(container.querySelector('div')).toBeInTheDocument();

        // rerender(<Container tag="section">{lgTextFixture}</Container>);
        // expect(container.querySelector('section')).toBeInTheDocument();

        // rerender(<Container tag="span">{lgTextFixture}</Container>);
        // expect(container.querySelector('span')).toBeInTheDocument();
    });

    // it('has correct width', () => {
    //     const { container, rerender } = render(
    //         <Container maxWidth="sm">{lgTextFixture}</Container>
    //     );

    //     expect(container.firstElementChild).toHaveStyle(
    //         `max-width: ${breakpoint.sm}`
    //     );

    //     rerender(<Container maxWidth="lg">{lgTextFixture}</Container>);
    //     expect(container.firstElementChild).toHaveStyle(
    //         `max-width: ${breakpoint.lg}`
    //     );
    // });
});
