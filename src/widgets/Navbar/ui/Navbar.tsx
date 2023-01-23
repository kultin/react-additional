import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

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

    const onLogOut = useCallback(
        () => {
            dispatch(userActions.logout());
        },
        [dispatch],
    );

    const isAdminPanelAvailable = isAdmin || isManager;

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
                <Dropdown
                    direction="bottom left"
                    className={cls.dropDown}
                    items={[
                        ...(isAdminPanelAvailable ? [{
                            content: t('Admin panel'),
                            href: RoutePath.admin_panel,

                        }] : []),
                        {
                            content: t('Profile'),
                            href: `${RoutePath.profile}/${authData.id}`,

                        },
                        {
                            content: t('Exit'),
                            onClick: onLogOut,

                        },
                    ]}
                    trigger={<Avatar size={35} src={authData.avatar} />}
                />
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
