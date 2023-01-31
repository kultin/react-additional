import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesLimit, getArticlesOrder, getArticlesPageNum, getArticlesSearch, getArticlesSort, getArticlesType,
} from '../selectors/articlePage';

interface fetchArticleListProps {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (props, { extra, rejectWithValue, getState }) => {
        const page = getArticlesPageNum(getState());
        const limit = getArticlesLimit(getState());
        const order = getArticlesOrder(getState());
        const sort = getArticlesSort(getState());
        const search = getArticlesSearch(getState());
        const type = getArticlesType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _order: order,
                    _sort: sort,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
