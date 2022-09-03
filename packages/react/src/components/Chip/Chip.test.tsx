import React from 'react';
import Chip from './Chip';
import { render } from '../../../test/utils/mockProvider';

describe('Chip', () => {
    it('renders Chip correctly', () => {
        const { container } = render(<Chip size="md" label="Chip filled" />);
        expect(container.firstChild).toMatchSnapshot();
    });
});
