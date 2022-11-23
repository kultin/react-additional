import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'text 1',
        user: { id: '1', username: 'user1' },
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    comment: {
        id: '1',
        text: 'text 1',
        user: { id: '1', username: 'user1' },
    },
    isLoading: true,
};
