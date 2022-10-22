import React from 'react';

import { lgTextFixture } from '../../../test/fixtures';
import { render } from '../../../test/utils/mockProvider';
import Box from './Box';

describe('Box', () => {
    it('renders Box correctly', () => {
        const { container } = render(
            <Box px="16" py="16">
                {lgTextFixture}
            </Box>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
