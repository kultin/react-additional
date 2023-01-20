import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesInfiniteList } from './ArticlesInfiniteList';

export default {
    title: 'shared/ArticlesInfiniteList',
    component: ArticlesInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesInfiniteList>;

const Template: ComponentStory<typeof ArticlesInfiniteList> = (args) => <ArticlesInfiniteList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
