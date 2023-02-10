import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from '@/shared/ui/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/consts/router';

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
                    href: getRouteAdminPanel(),

                }] : []),
                {
                    content: t('Profile'),
                    href: getRouteProfile(authData.id),

                },
                {
                    content: t('Exit'),
                    onClick: onLogOut,

                },
            ]}
            trigger={<Avatar fallbackInverted size={35} src={authData.avatar} />}
        />
    );
});
