import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch, { TSize } from '../components/Switch';
import { SBList } from './sb.styles';

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

export const AllSwitchSizes = () => {
    return (
        <SBList>
            {['sm', 'md', 'lg'].map(item => (
                <li key={item}>
                    <Switch
                        size={item as TSize}
                        checked={true}
                        onChange={() => console.log('click')}
                    />
                </li>
            ))}
        </SBList>
    );
};

AllSwitchSizes.story = {
    name: 'All Switch Sizes',
    parameters: {
        options: { showPanel: false },
    },
};
