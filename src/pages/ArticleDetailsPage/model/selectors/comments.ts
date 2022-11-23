import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getArticlesCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
