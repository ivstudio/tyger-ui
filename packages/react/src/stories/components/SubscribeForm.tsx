import React from 'react';
import Container from '../../components/Container';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import TextareaAutosize from '../../components/TextareaAutosize';
import styled from 'styled-components';
import { device, spacing } from '../../../../system';
import { sentence } from '../../../test/fixtures';

const Row = styled.div<{
    row?: number;
}>`
    display: grid;
    grid-auto-columns: 1fr;
    gap: ${spacing[16]};
    margin-bottom: ${spacing[16]};
    @media ${device.md} {
        grid-template-columns: ${({ row }) => `repeat(${row}, 1fr)`};
    }
`;

const SubscribeForm = ({ includeFeedback }: { includeFeedback?: boolean }) => {
    return (
        <Container my="32" paper padding="32" maxWidth="sm" borderRadius border>
            <Box mb="32">
                <Typography tag="h2" variant="h2" mb="4" align="center">
                    We'd love to help
                </Typography>
                <Typography align="center">{sentence}</Typography>
            </Box>

            <Row row={2}>
                <Input
                    label="First Name"
                    placeholder="First Name"
                    id="firstName"
                    autoComplete="off"
                    tabIndex={1}
                />

                <Input
                    label="Last Name"
                    placeholder="Last Name"
                    id="lastName"
                    autoComplete="off"
                    tabIndex={2}
                />
            </Row>

            <Row row={1}>
                <Input
                    required
                    label="Email"
                    placeholder="email@email.com"
                    id="email"
                    autoComplete="off"
                    tabIndex={3}
                />
            </Row>

            {includeFeedback && (
                <Box mb="32">
                    <TextareaAutosize
                        label="Share your feedback"
                        placeholder="Add a message here"
                        id="feedback"
                        autoComplete="off"
                        tabIndex={4}
                        size="lg"
                        minRows={3}
                    />
                </Box>
            )}

            <Button fullWidth onClick={() => console.log('click')}>
                Submit
            </Button>
        </Container>
    );
};

export default SubscribeForm;
