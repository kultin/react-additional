import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Main')}
            <Input
                placeholder={t('Enter')}
                value={value}
                onChange={onChange}
            />
            <RatingCard
                title={t('Leave your feedback')}
                feedbackTitle={t('Here')}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
