import React from 'react';
import Backdrop from './Backdrop';
import { render, fireEvent, screen } from '../../../test/utils/mockProvider';

const clickHandler = jest.fn();

describe('Backdrop', () => {
    it('renders Backdrop', () => {
        const { container } = render(<Backdrop open={true} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('handles click event', () => {
        render(
            <Backdrop onClick={clickHandler} open={true}>
                <p>Lorem ipsum dolor sit amet.</p>
            </Backdrop>
        );
        const content = screen.getByText('Lorem ipsum dolor sit amet.');
        expect(content).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('backdrop'));
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('hides child component', () => {
        render(
            <Backdrop onClick={clickHandler} open={false}>
                <p>Lorem ipsum dolor sit amet.</p>
            </Backdrop>
        );

        const content = screen.queryByText('Lorem ipsum dolor sit amet.');
        expect(content).not.toBeInTheDocument();
    });
});
