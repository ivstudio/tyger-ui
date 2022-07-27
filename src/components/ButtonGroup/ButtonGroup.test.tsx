import React from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../Button';
import { render } from '../../../test/utils/mockProvider';

const clickHandler = jest.fn();

describe('ButtonGroup', () => {
    it('renders ButtonGroup', () => {
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
