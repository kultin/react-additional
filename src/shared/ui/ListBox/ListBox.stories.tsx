import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '../Stack/Flex/Flex';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 150 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const topLeft = Template.bind({});
topLeft.args = {
    value: 'List',
    items: [
        { content: '1234', value: '123' },
        { content: '1233334', value: '123333' },
    ],
    direction: 'top left',

};

export const topRight = Template.bind({});
topRight.args = {
    value: 'List',
    items: [
        { content: '1234', value: '123' },
        { content: '1233334', value: '123333' },
    ],
    direction: 'top right',

};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: 'List',
    items: [
        { content: '1234', value: '123' },
        { content: '1233334', value: '123333' },
    ],
    direction: 'bottom left',

};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: 'List',
    items: [
        { content: '1234', value: '123' },
        { content: '1233334', value: '123333' },
    ],
    direction: 'bottom right',
};
