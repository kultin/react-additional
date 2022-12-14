import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesInited } from '../../selectors/articlePage';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, { dispatch, getState }) => {
        const inited = getArticlesInited(getState());
        if (!inited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticleList({
                page: 1,
            }));
        }
    },
);
