import React from 'react';

import { render } from '../../../test/utils/mockProvider';
import Chip from './Chip';

describe('Chip', () => {
    it('renders Chip correctly', () => {
        const { container } = render(<Chip size="md" label="Chip filled" />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
