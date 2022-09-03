import React from 'react';
import Box from './Box';
import { render } from '../../../test/utils/mockProvider';
import { LongTextFixture } from '../../../test/fixtures';

describe('Box', () => {
    it('renders Box correctly', () => {
        const { container } = render(
            <Box px="16" py="16">
                {LongTextFixture}
            </Box>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
