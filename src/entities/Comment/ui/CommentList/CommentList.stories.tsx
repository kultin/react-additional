import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comments: [
        {
            id: '1',
            text: 'text 1',
            user: { id: '1', username: 'user1' },
        },
        {
            id: '2',
            text: 'text 2',
            user: { id: '2', username: 'user2' },
        },
    ],
};

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [],
    isLoading: true,
};
