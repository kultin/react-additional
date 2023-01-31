import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from './Notification';

export default {
    title: 'entities/Notification',
    component: Notification,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
