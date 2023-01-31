import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlesHasMore, getArticlesIsLoading, getArticlesPageNum,
} from '../../selectors/articlePage';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticles',
    async (_, { dispatch, getState }) => {
        const hasMore = getArticlesHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlePageActions.setPage(page + 1));
            dispatch(fetchArticleList({}));
        }
    },
);
