import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleDetailsComment } from './ArticleDetailsComment';

export default {
    title: 'shared/ArticleDetailsComment',
    component: ArticleDetailsComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComment>;

const Template: ComponentStory<typeof ArticleDetailsComment> = (args) => <ArticleDetailsComment {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
