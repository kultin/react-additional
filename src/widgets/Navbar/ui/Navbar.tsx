import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={classNames(cls.links)}>
            <AppLink
                to="/"
                theme={AppLinkTheme.SECONDARY}
                className={classNames(cls.mainLink)}
            >
              Main Page
            </AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About Page</AppLink>
        </div>
    </div>
);
