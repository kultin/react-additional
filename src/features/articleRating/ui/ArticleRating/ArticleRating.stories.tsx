import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const withMock = require('storybook-addon-mock');

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    parameters: [withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = { articleId: '1' };
Normal.decorators = [StoreDecorator({
    user: {
        authData: { id: '1' },
    },
})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/article-rate?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                { rate: 4 },
            ],
        },
    ],
};

export const NoRate = Template.bind({});
NoRate.args = { articleId: '1' };
NoRate.decorators = [StoreDecorator({
    user: {
        authData: { id: '1' },
    },
})];
NoRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-rate?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                { rate: 0 },
            ],
        },
    ],
};
