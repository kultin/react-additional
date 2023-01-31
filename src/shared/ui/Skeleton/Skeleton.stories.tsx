import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: '100%',
    height: 200,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    width: '100%',
    height: 200,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryBlue = Template.bind({});
PrimaryBlue.args = {
    width: '100%',
    height: 200,
};
PrimaryBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: 100,
    height: 100,
};

export const CircleBlue = Template.bind({});
CircleBlue.args = {
    border: '50%',
    width: 100,
    height: 100,
};
CircleBlue.decorators = [ThemeDecorator(Theme.BLUE)];
