import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { TButtonVariant, TSize } from '../components/Button';
import Typography from '../components/Typography';
import { MdDelete as DeleteIcon, MdSend as SendIcon } from 'react-icons/md';
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

export const AllButtonsSizes = () => (
    <SBList>
        <li>
            <Typography tag="h3">Buttons</Typography>
            <Typography tag="p">
                The button contains three variants filled (default), text, and
                outlined.
            </Typography>
        </li>
        {['text', 'outlined', 'filled'].map(item => (
            <li key={item}>
                <Button
                    variant={item as TButtonVariant}
                    size="sm"
                    onClick={() => console.log('click')}
                >
                    Button
                </Button>
                <Button
                    variant={item as TButtonVariant}
                    size="md"
                    onClick={() => console.log('click')}
                >
                    Button
                </Button>
                <Button
                    variant={item as TButtonVariant}
                    size="lg"
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
        <li>
            {['sm', 'md', 'lg'].map(size => (
                <Button
                    startIcon={<DeleteIcon />}
                    size={size as TSize}
                    onClick={() => console.log('click')}
                >
                    Button
                </Button>
            ))}
        </li>
        <li>
            {['sm', 'md', 'lg'].map(size => (
                <Button
                    endIcon={<SendIcon />}
                    size={size as TSize}
                    onClick={() => console.log('click')}
                >
                    Button
                </Button>
            ))}
        </li>
    </SBList>
);

AllButtonsSizes.story = {
    name: 'All Button Sizes',
    parameters: {
        options: { showPanel: false },
    },
};
