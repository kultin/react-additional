import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { DropDownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

export interface DropDownItem {
    disabled?: boolean;
    onClick?: () => void;
    content?: ReactNode;
    href?: string;
}

interface DropDownProps {
  className?: string;
  items: DropDownItem[];
  trigger: ReactNode;
  direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
};

export function Dropdown(props: DropDownProps) {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}
