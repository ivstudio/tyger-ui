import React from 'react';
import IconButton from './IconButton';
import { MdOutlineMenu as MenuIcon } from 'react-icons/md';
import { render, fireEvent, screen } from '../../../test/utils/mockProvider';

const clickHandler = jest.fn();

describe('IconButton', () => {
    it('renders IconButton', () => {
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
});
