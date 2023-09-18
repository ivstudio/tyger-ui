import React from 'react';

import { render } from '../../../test/utils/mockProvider';
import Label from './Label';

describe('Label', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Label required htmlFor="firstName">
                Jon Doe
            </Label>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders label with asterisk when required prop is true', () => {
        const { getByText } = render(
            <Label required htmlFor="firstName">
                Jon Doe
            </Label>
        );
        const asteriskElement = getByText(/Jon Doe */i).closest('label');
        expect(asteriskElement).toBeInTheDocument();
    });

    it('applies disabled styles when disabled prop is true', () => {
        const { getByText } = render(
            <Label disabled htmlFor="firstName">
                Jon Doe
            </Label>
        );

        const labelElement = getByText(/Jon Doe/i).closest('label');
        expect(labelElement).toHaveAttribute('disabled');
    });
});
