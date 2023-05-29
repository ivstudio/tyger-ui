import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    argTypes: {
        orientation: {
            control: {
                type: 'select',
                options: ['horizontal', 'vertical'],
            },
        },
        id: {
            control: { type: 'text' },
            defaultValue: 'yourId',
            description: 'Element id',
        },
        children: { control: false },
        disabled: { control: 'boolean', defaultValue: false },
    },
} as Meta<typeof ButtonGroup>;

const Template: StoryFn<typeof ButtonGroup> = args => (
    <ButtonGroup {...args}>
        <Button onClick={() => alert('Button 0')}>Button</Button>
        <Button onClick={() => alert('Button 1')}>Button</Button>
        <Button onClick={() => alert('Button 2')}>Button</Button>
    </ButtonGroup>
);

export const Primary = Template.bind({});
Primary.args = {
    orientation: 'horizontal',
};
