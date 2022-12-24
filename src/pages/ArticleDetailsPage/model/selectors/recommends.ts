import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line arrow-body-style
export const getArticlesRecommendsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommends?.isLoading;
};
export const getArticlesRecommendsError = (state: StateSchema) => state.articleDetailsPage?.recommends?.error;
