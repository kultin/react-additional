import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

const notification: Notification = {
    id: '1',
    title: 'test title',
    description: 'test description',
};

export const Primary = Template.bind({});
Primary.args = {
    item: notification,
};
