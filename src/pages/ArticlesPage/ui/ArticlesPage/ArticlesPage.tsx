import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticlePage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('ArticlesPage')}
        </div>
    );
};

export default memo(ArticlesPage);
