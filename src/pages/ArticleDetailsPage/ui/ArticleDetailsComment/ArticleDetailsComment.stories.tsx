import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsComment } from './ArticleDetailsComment';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComment',
    component: ArticleDetailsComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComment>;

const Template: ComponentStory<typeof ArticleDetailsComment> = (args) => <ArticleDetailsComment {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
