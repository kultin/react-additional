import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'function sum (a,b) {\n  return a + b;\n}\n\nconsole.log(sum(1,2)); // Вернет 3',
};
