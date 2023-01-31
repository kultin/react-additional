import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationButton } from '@/features/notificationButton';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(
        () => {
            setIsAuthModal(false);
        },
        [setIsAuthModal],
    );

    const onShowModal = useCallback(
        () => {
            setIsAuthModal(true);
        },
        [setIsAuthModal],
    );

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.logo}
                    theme={TextTheme.INVERTED}
                    size={TextSize.M}
                    title={t('React additional')}
                />
                <AppLink
                    to={RoutePath.article_create}
                    className={cls.createBtn}
                >
                    {t('Create new article')}
                </AppLink>
                <HStack
                    gap="16"
                    className={cls.actions}
                >
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (

        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Sign In')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
