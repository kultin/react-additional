import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentItem } from './CommentItem';

export default {
    title: 'shared/CommentItem',
    component: CommentItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
