import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortFiled, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { getArticlesInited } from '../../selectors/articlePage';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, { dispatch, getState }) => {
        const inited = getArticlesInited(getState());
        if (!inited) {
            const orderFromURL = searchParams.get('order') as SortOrder;
            const sortFromURL = searchParams.get('sort') as ArticleSortFiled;
            const searchFromURL = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromURL) {
                dispatch(articlePageActions.setOrder(orderFromURL));
            }
            if (sortFromURL) {
                dispatch(articlePageActions.setSort(sortFromURL));
            }
            if (searchFromURL) {
                dispatch(articlePageActions.setSearch(searchFromURL));
            }
            if (typeFromUrl) {
                dispatch(articlePageActions.setType(typeFromUrl));
            }
            dispatch(articlePageActions.initState());
            dispatch(fetchArticleList({}));
        }
    },
);
