import React from 'react';

import { fireEvent, render, screen } from '../../../test/utils/mockProvider';
import Button from './Button';

const clickHandler = jest.fn();

describe('Button', () => {
    it('renders Button correctly', () => {
        const { container } = render(
            <Button onClick={clickHandler}>Button</Button>
        );

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
