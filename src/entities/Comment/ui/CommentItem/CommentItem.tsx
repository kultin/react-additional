import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string;
}

export const CommentItem = memo(({ className }: CommentItemProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            {t('Comment Item')}
        </div>
    );
});
