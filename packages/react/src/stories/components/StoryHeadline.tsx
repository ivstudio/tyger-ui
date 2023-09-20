import React from 'react';
import Typography from '../../components/Typography';
import { color } from '@tyger-ui/system';

interface IStoryHeadline {
    title: string;
    subTitle?: string;
}
export const StoryHeadline = ({ title, subTitle }: IStoryHeadline) => (
    <>
        <Typography variant="h1" mb="2">
            {title}
        </Typography>

        {subTitle && (
            <Typography
                variant="subheading1"
                mb="32"
                maxWidth={640}
                weight="300"
                color={color.grey[6]}
            >
                {subTitle}
            </Typography>
        )}
    </>
);

export default StoryHeadline;
