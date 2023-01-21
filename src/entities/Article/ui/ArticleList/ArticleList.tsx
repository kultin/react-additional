import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    List, WindowScroller, ListRowProps,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    error?: string;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, articles, isLoading, view = ArticleView.GRID, error, target, virtualized = true,
    } = props;
    const { t } = useTranslation();

    const isList = view === ArticleView.LIST;

    const itemsPerRow = isList ? 1 : 3;
    const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, isScrolling, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(index + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(<ArticleListItem
                article={articles[i]}
                view={view}
                className={cls.card}
                target={target}
                key={`str${i}`}
            />);
        }
        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Articles not found')}
                    align={TextAlign.CENTER}
                    size={TextSize.L}
                />
            </div>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width, height, registerChild, onChildScroll, isScrolling, scrollTop,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                >
                    {virtualized
                        ? (
                            <List
                                autoHeight
                                height={height ?? 700}
                                rowCount={rowCount}
                                rowHeight={isList ? 700 : 330}
                                rowRenderer={rowRenderer}
                                width={width ? width - 80 : 700}
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (articles.map((article) => (
                            <ArticleListItem
                                article={article}
                                view={view}
                                target={target}
                                key={article.id}
                                className={cls.card}
                            />
                        )))}
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});
