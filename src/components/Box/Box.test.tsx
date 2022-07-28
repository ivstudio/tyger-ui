import React from 'react';
import Box from './Box';
import { render } from '../../../test/utils/mockProvider';

describe('Box', () => {
    it('renders Box', () => {
        const { container } = render(
            <Box px="16" py="16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Box>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
