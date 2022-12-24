import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleList } from '../fetchArticleList';
import { fetchNextArticles } from './fetchNextArticles';

jest.mock('../fetchArticleList');

describe('fetchNextArticles.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toBeCalledWith({});
    });
    test('fetch not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticles, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
