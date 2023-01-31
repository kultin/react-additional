import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page/Page';
import cls from './NotFound.module.scss';

interface NotFoundProps {
  className?: string,
}

export const NotFound = ({ className }: NotFoundProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.NotFound, {}, [className])}>
            {t('Page Not Found')}
        </Page>
    );
};
