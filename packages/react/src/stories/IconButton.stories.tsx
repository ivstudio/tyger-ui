import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MdOutlineMenu as MenuIcon } from 'react-icons/md';
import { MdMoreHoriz as MoreIcon } from 'react-icons/md';

import IconButton from '../components/IconButton';
import { IconsButtonsSizes } from '../components/IconButton/IconButton.types';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainerInline } from './sb.styles';
import Container from '../components/Container';
import Box from '../components/Box';

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
    <Container maxWidth="xs" mt="32">
        <IconButton {...args}>
            <MoreIcon />
        </IconButton>
    </Container>
);

export const Docs = () => (
    <Container maxWidth="md" mt="32">
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
                <Box key={item} mr="16">
                    <IconButton
                        filled
                        size={item as IconsButtonsSizes}
                        onClick={() => console.log('click')}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            ))}
        </SBContainerInline>
    </Container>
);

Docs.story = {
    name: 'All IconButton Sizes',
    parameters: {
        options: { showPanel: false },
    },
};

export const Default = Template.bind({});
Default.args = {};
