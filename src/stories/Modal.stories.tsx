import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button';
import Modal from '../components/Modal';
import Typography from '../components/Typography';

export default {
    title: 'Feedback/Modal',
    component: Modal,
    parameters: {
        options: { showPanel: true },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => {
    const [{ open }, updateArgs] = useArgs();

    return (
        <>
            <Modal
                {...args}
                open={open}
                onBackdropClick={() => updateArgs({ open: false })}
            >
                <Modal.Header
                    title="Modal Title"
                    onClose={() => updateArgs({ open: false })}
                />
                <Modal.Body>
                    <Typography mb="16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </Typography>
                    <Typography>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="text"
                        onClick={() => updateArgs({ open: false })}
                    >
                        CANCEL
                    </Button>
                    <Button onClick={() => updateArgs({ open: false })}>
                        SAVE CHANGES
                    </Button>
                </Modal.Footer>
            </Modal>

            <Button onClick={() => updateArgs({ open: true })}>
                Open Modal
            </Button>
            <div id="portal"></div>
        </>
    );
};

export const Default = Template.bind({});
Default.args = {
    children: <>HELLO</>,
};
