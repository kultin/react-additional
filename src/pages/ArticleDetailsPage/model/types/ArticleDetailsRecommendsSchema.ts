import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';

export interface ArticleDetailsRecommendsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
