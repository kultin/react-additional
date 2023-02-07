import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingAPI';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' });

    const [rateArticleMutation] = useRateArticle();
    const rating = data?.[0];

    const handlerRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                articleId, rate: starsCount, userId: userData?.id ?? '', feedback,
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handlerRateArticle(starsCount, feedback);
    }, [handlerRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handlerRateArticle(starsCount);
    }, [handlerRateArticle]);

    if (isLoading) {
        return <Skeleton height={140} width="100%" />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Rate the article')}
            feedbackTitle={t('Rate the article it will help us to get better')}
            hasFeedback
        />

    );
});

export default ArticleRating;
