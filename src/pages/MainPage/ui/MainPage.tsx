import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid="MainPage">
            {t('Main')}
            <Input
                placeholder={t('Enter')}
                value={value}
                onChange={onChange}
            />
            <Counter />
        </Page>
    );
};

export default MainPage;
