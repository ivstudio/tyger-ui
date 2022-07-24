import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Accordion from '../components/Accordion';

const items = [
    {
        summary: 'Sed non fermentum',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum, purus vel cursus imperdiet, augue ipsum egestas urna, a commodo purus turpis et metus. Sed non fermentum justo, eu tincidunt lorem. Maecenas ut fringilla sem. Proin at vestibulum diam. Nulla condimentum, augue accumsan ornare sollicitudin, nibh eros rutrum quam, sit amet fringilla velit leo ac tortor. Suspendisse elementum sodales cursus. Donec justo ex, fringilla nec tempus eu, porta eu justo. Phasellus ac pellentesque nibh. Nullam quis nunc a mauris malesuada porttitor eu sed velit. Aliquam scelerisque turpis id congue viverra. Fusce in eros cursus urna iaculis cursus. Morbi rhoncus condimentum ipsum, at cursus urna laoreet vitae. Vestibulum magna dolor, cursus et egestas ut, gravida non erat. Vestibulum volutpat ex vel ante condimentum imperdiet.',
    },
    {
        summary: 'TDonec justo ex, fringilla nec tempus eu, porta eu justo',
        details:
            'Proin at vestibulum diam. Nulla condimentum, augue accumsan ornare sollicitudin, nibh eros rutrum quam, sit amet fringilla velit leo ac tortor. ',
    },
    {
        summary: 'Aliquam scelerisque',
        details:
            'Vestibulum magna dolor, cursus et egestas ut, gravida non erat. Vestibulum volutpat ex vel ante condimentum imperdiet.',
    },
    {
        summary: 'Fusce in eros cursus',
        details:
            'Donec justo ex, fringilla nec tempus eu, porta eu justo. Phasellus ac pellentesque nibh.',
    },
];

export default {
    title: 'Surfaces/Accordion',
    component: Accordion,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        children: { control: false },
        expandedId: {
            control: { type: 'select', options: ['01', '02', '03'] },
        },
    },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => {
    const [{ expandedId }, updateArgs] = useArgs();

    return (
        <>
            <Accordion
                {...args}
                expandedId={expandedId}
                onClick={id => updateArgs({ expandedId: id })}
            >
                <Accordion.Item>
                    <Accordion.Summary id="01">
                        {items[0].summary}
                    </Accordion.Summary>
                    <Accordion.Details>{items[0].details}</Accordion.Details>
                </Accordion.Item>

                <Accordion.Item>
                    <Accordion.Summary id="02">
                        {items[1].summary}
                    </Accordion.Summary>
                    <Accordion.Details>{items[1].details}</Accordion.Details>
                </Accordion.Item>

                <Accordion.Item>
                    <Accordion.Summary id="03">
                        {items[2].summary}
                    </Accordion.Summary>
                    <Accordion.Details>{items[2].details}</Accordion.Details>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {};
