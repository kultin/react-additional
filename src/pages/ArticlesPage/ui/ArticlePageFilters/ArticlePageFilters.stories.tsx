import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlePageFilters } from './ArticlePageFilters';

export default {
    title: 'entities/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
