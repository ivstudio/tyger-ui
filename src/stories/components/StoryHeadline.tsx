import React from 'react';
import Typography from '../../components/Typography';
import { color } from '../../theme/colors';

interface IStoryHeadline {
    title: string;
    subTitle?: string;
}
export const StoryHeadline = ({ title, subTitle }: IStoryHeadline) => {
    return (
        <>
            <Typography variant="h1" mb="8">
                {title}
            </Typography>
            {subTitle && (
                <Typography
                    variant="subheading1"
                    mb="32"
                    maxWidth={640}
                    color={color.grey[5]}
                >
                    {subTitle}
                </Typography>
            )}
        </>
    );
};

export default StoryHeadline;
