import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

interface NotificationProps {
    className?: string;
}

export const Notification = memo((props: NotificationProps) => {
    const { className } = props;

    return (
        <div className={classNames('', {}, [className])} />
    );
});
