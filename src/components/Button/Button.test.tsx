import React from 'react';
import Button from './Button';
import { render } from '../../../test/utils/mockProvider';

const clickHandler = jest.fn();

describe('Button', () => {
    it('renders Button', () => {
        const { container } = render(
            <Button onClick={clickHandler}>Button</Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
