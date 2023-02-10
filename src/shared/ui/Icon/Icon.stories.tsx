import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';
import UserIcon from '../../assets/icons/user-filled.svg';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    Svg: UserIcon,
};
