import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MdOutlineMenu as MenuIcon } from 'react-icons/md';
import { MdMoreHoriz as MoreIcon } from 'react-icons/md';

import IconButton, { TSize } from '../components/IconButton';
import { SBList } from './sb.styles';

export default {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            defaultValue: 'md',
        },
        id: {
            control: { type: 'text' },
            defaultValue: 'yourId',
        },
        children: { control: false },
        disabled: { control: 'boolean', defaultValue: false },
        className: { control: false },
    },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => (
    <IconButton {...args}>
        <MoreIcon />
    </IconButton>
);

export const Default = Template.bind({});
Default.args = {};

export const AllIconButtonsSizes = () => (
    <SBList>
        {['sm', 'md', 'lg'].map(item => (
            <li key={item}>
                <IconButton
                    filled
                    size={item as TSize}
                    onClick={() => console.log('click')}
                >
                    <MenuIcon />
                </IconButton>
            </li>
        ))}
    </SBList>
);

AllIconButtonsSizes.story = {
    name: 'All IconButton Sizes',
    parameters: {
        options: { showPanel: false },
    },
};
