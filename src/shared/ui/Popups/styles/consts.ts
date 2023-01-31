import { DropDownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropDownDirection, string> = {
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
};
