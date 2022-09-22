import React from 'react';
import { MdOutlineMenu as MenuIcon } from 'react-icons/md';

import { fireEvent, render, screen } from '../../../test/utils/mockProvider';
import IconButton from './IconButton';

const clickHandler = jest.fn();

describe('IconButton', () => {
    it('renders IconButton correctly', () => {
        const { container } = render(
            <IconButton filled size="sm" onClick={clickHandler}>
                <MenuIcon />
            </IconButton>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('handles click event', () => {
        render(
            <IconButton filled size="sm" onClick={clickHandler}>
                <MenuIcon />
            </IconButton>
        );

        fireEvent.click(screen.getByRole('button'));
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('will not click when it is disabled', () => {
        render(
            <IconButton filled size="sm" onClick={clickHandler} disabled>
                <MenuIcon />
            </IconButton>
        );
        const buttonElem = screen.getByRole('button');

        expect(buttonElem).toBeDisabled();

        fireEvent.click(buttonElem);
        expect(clickHandler).toHaveBeenCalledTimes(0);
    });
});
