import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MdOutlineMenu as MenuIcon } from 'react-icons/md';
import { MdMoreHoriz as MoreIcon } from 'react-icons/md';

import IconButton, { TSize } from '../components/IconButton';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainer, SBContainerInline } from './sb.styles';

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
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = args => (
    <IconButton {...args}>
        <MoreIcon />
    </IconButton>
);

export const Default = Template.bind({});
Default.args = {};

export const AllIconButtonsSizes = () => (
    <SBContainer>
        <StoryHeadline
            title="Icon Button"
            subTitle="Icon Buttons represent their behavior with an icon."
        />

        <StoryTitleSection
            title="Size"
            description="For larger or smaller buttons, use the size prop."
        />
        <SBContainerInline
            padding="16"
            mb="48"
            border
            borderRadius
            tag="ul"
            flex
        >
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
        </SBContainerInline>
    </SBContainer>
);

AllIconButtonsSizes.story = {
    name: 'All IconButton Sizes',
    parameters: {
        options: { showPanel: false },
    },
};
