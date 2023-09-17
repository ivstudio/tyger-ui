import React from 'react';

import { fireEvent, render } from '../../../test/utils/mockProvider';
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

    it('displays error message when error prop is true', () => {
        const { getByText } = render(
            <Input error helperText="Error message" />
        );
        const errorMessageElement = getByText('Error message');
        expect(errorMessageElement).toBeInTheDocument();
    });

    it('does not display error message when error prop is false', () => {
        const { queryByText } = render(<Input helperText="Helper text" />);
        const errorMessageElement = queryByText('Error message');
        expect(errorMessageElement).toBeNull();
    });

    it('calls onChange callback when input value changes', () => {
        const onChangeMock = jest.fn();
        const { getByRole } = render(<Input onChange={onChangeMock} />);
        const inputElement = getByRole('textbox') as HTMLInputElement;
        fireEvent.change(inputElement, { target: { value: 'John Doe' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
        expect(inputElement.value).toBe('John Doe');
    });
});
