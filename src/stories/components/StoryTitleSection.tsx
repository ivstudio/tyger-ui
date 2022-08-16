import React from 'react';
import Typography from '../../components/Typography';

interface IStoryTitleSection {
    title: string;
    description?: string;
}

const StoryTitleSection = ({ title, description }: IStoryTitleSection) => {
    return (
        <>
            <Typography variant="h3" mb="8">
                {title}
            </Typography>
            {description && <Typography mb="16">{description}</Typography>}
        </>
    );
};

export default StoryTitleSection;
