import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { TButtonVariant, TSize } from '../components/Button';
import { StoryHeadline, StoryTitleSection } from './components';
import { MdDelete as DeleteIcon, MdSend as SendIcon } from 'react-icons/md';
import { SBContainer, SBContainerInline } from './sb.styles';

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
        rounded: { control: 'boolean', defaultValue: true },
        className: { control: false },
        startIcon: { control: false },
        endIcon: { control: false },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
    variant: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
};

export const ButtonsVariant = () => (
    <SBContainer>
        <StoryHeadline
            title="Button"
            subTitle="A control that executes your custom code in response to user interactions."
        />

        <StoryTitleSection
            title="Buttons"
            description="The button contains three variants filled (default), text, and
            outlined."
        />
        <SBContainerInline p="16" mb="48" border borderRadius>
            {['text', 'outlined', 'filled'].map(item => (
                <Button
                    variant={item as TButtonVariant}
                    onClick={() => console.log('click')}
                >
                    Button
                </Button>
            ))}
        </SBContainerInline>

        <StoryTitleSection
            title="Buttons with icons and label"
            description="Enhance the UX of the interface by using icons with labels."
        />
        <SBContainerInline p="16" mb="48" border borderRadius>
            <Button
                startIcon={<DeleteIcon />}
                variant="outlined"
                onClick={() => console.log('click')}
            >
                Button
            </Button>
            <Button endIcon={<SendIcon />} onClick={() => console.log('click')}>
                Button
            </Button>
        </SBContainerInline>

        <StoryTitleSection
            title="Size"
            description="For larger or smaller buttons, use the size prop."
        />

        <SBContainerInline p="16" mb="48" border borderRadius>
            <SBContainerInline flex mb="12">
                {['sm', 'md', 'lg'].map(size => (
                    <li key={size}>
                        <Button
                            size={size as TSize}
                            onClick={() => console.log('click')}
                        >
                            Button
                        </Button>
                    </li>
                ))}
            </SBContainerInline>
            <SBContainerInline flex mb="12">
                {['sm', 'md', 'lg'].map(size => (
                    <li key={size}>
                        <Button
                            variant="outlined"
                            size={size as TSize}
                            onClick={() => console.log('click')}
                        >
                            Button
                        </Button>
                    </li>
                ))}
            </SBContainerInline>
            <SBContainerInline flex>
                {['sm', 'md', 'lg'].map(size => (
                    <li key={size}>
                        <Button
                            startIcon={<DeleteIcon />}
                            variant="text"
                            size={size as TSize}
                            onClick={() => console.log('click')}
                        >
                            Button
                        </Button>
                    </li>
                ))}
            </SBContainerInline>
        </SBContainerInline>

        <StoryTitleSection title="Full width Button" />
        <SBContainerInline p="16" mb="48" border borderRadius>
            <Button fullWidth size="lg" onClick={() => console.log('click')}>
                Button
            </Button>
        </SBContainerInline>
    </SBContainer>
);

ButtonsVariant.story = {
    name: 'Button Variants',
    parameters: {
        options: { showPanel: false },
    },
};