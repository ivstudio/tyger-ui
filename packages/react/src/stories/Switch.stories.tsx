import React from 'react';
import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Switch, { TSize } from '../components/Switch';
import { StoryHeadline, StoryTitleSection } from './components';
import { SBContainer, SBContainerInline } from './sb.styles';

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
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => {
    const [{ checked }, updateArgs] = useArgs();

    return (
        <Switch
            {...args}
            checked={checked}
            onChange={() => updateArgs({ checked: !checked })}
        />
    );
};

export const Default = Template.bind({});
Default.args = {};

export const SwitchVariants = () => {
    return (
        <SBContainer>
            <StoryHeadline
                title="Switch"
                subTitle="Switches toggle the state of a single setting on or off."
            />

            <StoryTitleSection
                title="Size"
                description="For larger or smaller buttons, use the size prop."
            />
            <SBContainerInline p="16" mb="48" border borderRadius tag="ul">
                {['sm', 'md', 'lg'].map(item => (
                    <li>
                        <Switch
                            key={item}
                            size={item as TSize}
                            checked={true}
                            onChange={() => console.log('click')}
                        />
                    </li>
                ))}
            </SBContainerInline>
        </SBContainer>
    );
};

SwitchVariants.story = {
    name: 'Switch Variants',
    parameters: {
        options: { showPanel: false },
    },
};