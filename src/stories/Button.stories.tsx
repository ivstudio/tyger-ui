import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { TSize } from '../components/Button';
import { SBList } from './sb.styles';

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
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
};

export const AllButtonsSizes = () => (
    <SBList>
        {['sm', 'md', 'lg'].map(item => (
            <li key={item}>
                <Button
                    size={item as TSize}
                    onClick={() => console.log('click')}
                >
                    Button
                </Button>
            </li>
        ))}
        <li>
            <Button fullWidth size="lg" onClick={() => console.log('click')}>
                Button
            </Button>
        </li>
    </SBList>
);

AllButtonsSizes.story = {
    name: 'All Button Sizes',
    parameters: {
        options: { showPanel: false },
    },
};
