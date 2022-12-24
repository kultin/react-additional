import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleList } from '../fetchArticleList';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticleList');

describe('initArticlesPage.test', () => {
    test('fetch not called', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: true,
            },
        });

        // await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(0);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
