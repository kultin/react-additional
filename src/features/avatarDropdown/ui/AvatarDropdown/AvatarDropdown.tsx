import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from '@/shared/ui/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Avatar } from '@/shared/ui/Avatar/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogOut = useCallback(
        () => {
            dispatch(userActions.logout());
        },
        [dispatch],
    );

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction="bottom left"
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
    );
});
