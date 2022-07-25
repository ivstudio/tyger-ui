import React from 'react';
// import { fireEvent, RenderOptions } from '@testing-library/react';
import Button from './Button';
import { render } from '../../../test/utils/mockProvider';

const clickHandler = jest.fn();

describe('Button', () => {
    it('renders the Button', () => {
        const { container } = render(
            <Button onClick={clickHandler}>Button</Button>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
