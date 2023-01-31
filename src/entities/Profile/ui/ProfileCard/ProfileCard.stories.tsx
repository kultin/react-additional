import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import avatar from '@/shared/assets/tests/cat-avatar.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        firstname: 'Bob',
        lastname: 'Dylan',
        age: 88,
        currency: Currency.RUB,
        country: Country.Russia,
        city: 'NN',
        username: 'admin',
        avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};
