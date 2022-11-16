import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Testing title',
    text: 'Testing text Testing text Testing text ',
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Testing title',
    text: 'Testing text Testing text Testing text ',
    size: TextSize.S,
};

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Testing title',
    text: 'Testing text Testing text Testing text ',
    size: TextSize.L,
};

export const Error = Template.bind({});
Error.args = {
    title: 'Testing title',
    text: 'Testing text Testing text Testing text ',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Testing title',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Testing text Testing text Testing text ',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Testing title',
    text: 'Testing text Testing text Testing text ',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Testing title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Testing text Testing text Testing text ',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
