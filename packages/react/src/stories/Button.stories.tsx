import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import Button from '../components/Button';
import { ButtonSizes, ButtonVariant } from '../components/Button/Button.types';
import { StoryHeadline, StoryTitleSection } from './components';
import { MdDelete as DeleteIcon, MdSend as SendIcon } from 'react-icons/md';
import { SBContainerInline } from './sb.styles';
import Container from '../components/Container';
import Box from '../components/Box';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        variant: {
            control: {
                type: 'select',
            },
        },
        size: {
            control: { type: 'select', options: ['sm', 'md', 'lg'] },
            description: 'The size of the component. ',
            defaultValue: 'md',
        },
        id: {
            control: { type: 'text' },
            defaultValue: 'yourId',
            description: 'Element id',
        },
        children: { control: 'text', defaultValue: 'Button' },
        type: {
            control: { type: 'select', options: ['button', 'submit', 'reset'] },
            defaultValue: 'button',
        },
        disabled: { control: 'boolean', defaultValue: false },
        fullWidth: { control: 'boolean', defaultValue: false },
        rounded: { control: 'boolean', defaultValue: false },
        className: { control: false },
        startIcon: { control: false },
        endIcon: { control: false },
    },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => (
    <Container maxWidth="md" mt="32">
        <Button {...args}>Button</Button>
    </Container>
);

export const Docs = () => (
    <Container maxWidth="md" mt="32">
        <StoryHeadline
            title="Button"
            subTitle="A control that executes your custom code in response to user interactions."
        />

        <StoryTitleSection
            title="Buttons"
            description="The button contains three variants filled (default), text, and
            outlined."
        />
        <SBContainerInline padding="24" mb="48" flex border borderRadius>
            {['text', 'outlined', 'filled'].map(item => (
                <Box key={item} mr="16">
                    <Button
                        variant={item as ButtonVariant}
                        onClick={() => console.log('click')}
                    >
                        Button
                    </Button>
                </Box>
            ))}
        </SBContainerInline>

        <StoryTitleSection
            title="Buttons with icons and label"
            description="Enhance the UX of the interface by using icons with labels."
        />
        <SBContainerInline padding="24" mb="48" flex border borderRadius>
            <Box mr="16">
                <Button
                    startIcon={<DeleteIcon />}
                    variant="outlined"
                    onClick={() => console.log('click')}
                >
                    Button
                </Button>
            </Box>
            <Box mr="16">
                <Button
                    endIcon={<SendIcon />}
                    onClick={() => console.log('click')}
                >
                    Button
                </Button>
            </Box>
        </SBContainerInline>

        <StoryTitleSection
            title="Size"
            description="For larger or smaller buttons, use the size prop."
        />

        <SBContainerInline padding="24" mb="48" border borderRadius>
            <SBContainerInline flex mb="24">
                {['sm', 'md', 'lg'].map(size => (
                    <Box key={size} mr="16">
                        <Button
                            size={size as ButtonSizes}
                            onClick={() => console.log('click')}
                        >
                            Button
                        </Button>
                    </Box>
                ))}
            </SBContainerInline>

            <SBContainerInline flex mb="24">
                {['sm', 'md', 'lg'].map(size => (
                    <Box key={size} mr="16">
                        <Button
                            variant="outlined"
                            size={size as ButtonSizes}
                            onClick={() => console.log('click')}
                        >
                            Button
                        </Button>
                    </Box>
                ))}
            </SBContainerInline>
            <SBContainerInline flex>
                {['sm', 'md', 'lg'].map(size => (
                    <Box key={size} mr="16">
                        <Button
                            startIcon={<DeleteIcon />}
                            variant="text"
                            size={size as ButtonSizes}
                            onClick={() => console.log('click')}
                        >
                            Button
                        </Button>
                    </Box>
                ))}
            </SBContainerInline>
        </SBContainerInline>

        <StoryTitleSection title="Full width Button" />
        <SBContainerInline padding="24" mb="48" border borderRadius>
            <Button fullWidth size="lg" onClick={() => console.log('click')}>
                Button
            </Button>
        </SBContainerInline>

        <StoryTitleSection title="Rounded Button" />
        <SBContainerInline flex padding="24" mb="48" border borderRadius>
            {['sm', 'md', 'lg'].map(size => (
                <Box key={size} mr="16">
                    <Button
                        rounded
                        size={size as ButtonSizes}
                        onClick={() => console.log('click')}
                    >
                        Button
                    </Button>
                </Box>
            ))}
        </SBContainerInline>
    </Container>
);

Docs.story = {
    name: 'Button Variants',
    parameters: {
        options: { showPanel: false },
    },
};

export const Filled = Template.bind({});
Filled.args = {
    variant: 'filled',
    chidren: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
};
