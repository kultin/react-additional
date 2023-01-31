import { StateSchema } from '@/app/providers/StoreProvider';

// eslint-disable-next-line arrow-body-style
export const getArticlesCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.comments?.isLoading;
};
export const getArticlesCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;
