import React from 'react';
import Button from './Button';
import { render, fireEvent, screen } from '../../../test/utils/mockProvider';

const clickHandler = jest.fn();

describe('Button', () => {
    it('renders Button correctly', () => {
        const { container, debug } = render(
            <Button onClick={clickHandler}>Button</Button>
        );
        debug();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('will not click when it is disabled', () => {
        render(
            <Button disabled onClick={clickHandler}>
                Button
            </Button>
        );
        const buttonElem = screen.getByRole('button');

        expect(buttonElem).toBeDisabled();

        fireEvent.click(buttonElem);
        expect(clickHandler).toHaveBeenCalledTimes(0);
    });
});
