import { EntityState } from '@reduxjs/toolkit';
import {
    Article, ArticleView, ArticleType, ArticleSortFiled,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlePageSchema extends EntityState<Article>{
    isLoading: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filter
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortFiled;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
