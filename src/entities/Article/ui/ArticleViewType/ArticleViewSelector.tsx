import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from 'entities/Article/model/consts/articleConsts';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onClickView?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.GRID,
        icon: ListIcon,
    },
    {
        view: ArticleView.LIST,
        icon: TiledIcon,
    },
];
export const ArticleViewSelector = ({ className, view, onClickView }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => () => {
        onClickView?.(newView);
    };

    return (
        <div className={classNames(cls.selector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
};
