import React from 'react';
import Container from '../../components/Container';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TextareaAutosize from '../../components/TextareaAutosize';

const SubscribeForm = () => {
    return (
        <Container my="32" paper padding="32" maxWidth="xs" borderRadius border>
            <Box mb="16">
                <Input
                    required
                    label="First Name"
                    placeholder="First Name"
                    id="firstName"
                    autoComplete="off"
                    tabIndex={1}
                    size="lg"
                />
            </Box>

            <Box mb="16">
                <Input
                    label="Last Name"
                    placeholder="Last Name"
                    id="lastName"
                    autoComplete="off"
                    tabIndex={2}
                    size="lg"
                />
            </Box>

            <Box mb="32">
                <TextareaAutosize
                    label="Share your feedback"
                    placeholder="Add a message here"
                    id="feedback"
                    autoComplete="off"
                    tabIndex={1}
                    size="lg"
                    minRows={3}
                />
            </Box>

            <Button fullWidth onClick={() => console.log('click')}>
                Submit
            </Button>
        </Container>
    );
};

export default SubscribeForm;
