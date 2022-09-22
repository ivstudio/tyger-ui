import React from 'react';

import { render } from '../../../test/utils/mockProvider';
import Button from '../Button';
import ButtonGroup from './ButtonGroup';

const clickHandler = jest.fn();

describe('ButtonGroup', () => {
    it('renders ButtonGroup correctly', () => {
        const { container } = render(
            <ButtonGroup>
                <Button onClick={clickHandler}>Button</Button>
                <Button onClick={clickHandler}>Button</Button>
                <Button onClick={clickHandler}>Button</Button>
            </ButtonGroup>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
