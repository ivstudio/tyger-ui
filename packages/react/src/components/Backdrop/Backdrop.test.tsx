import React from 'react';

import { shortTextFixture } from '../../../test/fixtures';
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
                <p>{shortTextFixture}</p>
            </Backdrop>
        );
        const content = screen.getByText(shortTextFixture);
        expect(content).toBeInTheDocument();

        fireEvent.click(screen.getByTestId('backdrop'));
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    it('hides child component', () => {
        render(
            <Backdrop onClick={clickHandler} open={false}>
                <p>{shortTextFixture}</p>
            </Backdrop>
        );

        const content = screen.queryByText(shortTextFixture);
        expect(content).not.toBeInTheDocument();
    });
});
