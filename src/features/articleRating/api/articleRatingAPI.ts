import { rtkApi } from '@/shared/api/rtkApi';
import { RatingType } from '../model/types/types';

interface GetArticleRatingArgs {
    userId: string;
    articleId: string;
}

interface RateArticleArgs {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<RatingType[], GetArticleRatingArgs >({
            query: ({ userId, articleId }) => ({
                url: '/article-rate',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, RateArticleArgs>({
            query: (arg) => ({
                url: '/article-rate',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});
export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
