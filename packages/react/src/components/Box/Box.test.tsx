import React from 'react';

import { LongTextFixture } from '../../../test/fixtures';
import { render } from '../../../test/utils/mockProvider';
import Box from './Box';

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
