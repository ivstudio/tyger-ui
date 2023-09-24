import React from 'react';

import { sentence } from '../../../test/fixtures';
import { fireEvent, render, screen } from '../../../test/utils/mockProvider';
import Backdrop from './Backdrop';

const clickHandler = jest.fn();

describe('Backdrop', () => {
    it('renders Backdrop correctly', () => {
        const { container } = render(<Backdrop open={true} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('handles click event', () => {
        render(
            <Backdrop onClick={clickHandler} open={true}>
                <p>{sentence}</p>
            </Backdrop>
        );
        const content = screen.getByText(sentence);
        expect(content).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('backdrop'));
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('hides child component', () => {
        render(
            <Backdrop onClick={clickHandler} open={false}>
                <p>{sentence}</p>
            </Backdrop>
        );

        const content = screen.queryByText(sentence);
        expect(content).not.toBeInTheDocument();
    });
});
