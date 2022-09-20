import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)}>Main Page</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>About Page</AppLink>
      </div>
    </div>
  )
}
