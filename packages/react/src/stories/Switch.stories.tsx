import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import Switch from '../components/Switch';
import { SwitchSizes } from '../components/Switch/Switch.types';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainer, SBContainerInline } from './sb.styles';
import Container from '../components/Container';
import Box from '../components/Box';

export default {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
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
        checked: {
            control: { type: 'boolean', defaultValue: true },
            description: 'If true, the component is checked.',
        },
        disabled: { control: 'boolean', defaultValue: false },
    },
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = args => {
    const [{ checked }, updateArgs] = useArgs();

    return (
        <Container maxWidth="xs" mt="32">
            <Switch
                {...args}
                checked={checked}
                onChange={() => updateArgs({ checked: !checked })}
            />
        </Container>
    );
};

export const Docs = () => {
    return (
        <Container maxWidth="md" mt="32">
            <SBContainer>
                <StoryHeadline
                    title="Switch"
                    subTitle="Switches toggle the state of a single setting on or off."
                />

                <StoryTitleSection
                    title="Size"
                    description="For larger or smaller buttons, use the size prop."
                />
                <SBContainerInline padding="24" mb="48" border borderRadius>
                    {['sm', 'md', 'lg'].map(item => (
                        <Box key={item} mb="32">
                            <Switch
                                key={item}
                                size={item as SwitchSizes}
                                checked={true}
                                onChange={() => console.log('click')}
                            />
                        </Box>
                    ))}
                </SBContainerInline>
            </SBContainer>
        </Container>
    );
};

Docs.story = {
    name: 'Switch Variants',
    parameters: {
        options: { showPanel: false },
    },
};

export const BasicSwitch = Template.bind({});
BasicSwitch.args = {};
