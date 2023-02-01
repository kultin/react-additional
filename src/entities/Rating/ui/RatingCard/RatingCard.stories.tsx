import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from './RatingCard';

export default {
    title: 'entities/Rating',
    component: Rating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
