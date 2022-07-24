import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { MdOutlineMenu as MenuIcon } from 'react-icons/md';
import { MdChevronLeft as BackIcon } from 'react-icons/md';

import Drawer from '../components/Drawer';
import IconButton from '../components/IconButton';

export default {
    title: 'Navigation/Drawer',
    component: Drawer,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        anchor: {
            control: {
                type: 'select',
                options: ['top', 'right', 'bottom', 'left'],
            },
            defaultValue: 'left',
        },
        children: { control: false },
        open: { control: 'boolean', defaultValue: false },
        hideBackdrop: { control: 'boolean', defaultValue: false },
        title: { control: 'text' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = args => {
    const [{ open }, updateArgs] = useArgs();

    return (
        <>
            <Drawer
                {...args}
                open={open}
                onClose={() => updateArgs({ open: false })}
            >
                {args.children}
            </Drawer>
            <IconButton onClick={() => updateArgs({ open: true })}>
                <MenuIcon />
            </IconButton>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    children: <>HELLO</>,
};
