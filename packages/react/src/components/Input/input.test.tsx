import React from 'react';

import { render } from '../../../test/utils/mockProvider';
import Input from './Input';

describe('Input', () => {
    it('renders correctly', () => {
        const { container } = render(<Input />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('applies disabled styles when disabled prop is true', () => {
        const { getByRole } = render(<Input disabled />);
        const inputElement = getByRole('textbox');
        expect(inputElement).toHaveAttribute('disabled');
    });
});
