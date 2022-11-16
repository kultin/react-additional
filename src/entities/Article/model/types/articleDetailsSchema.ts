import { Article } from './article';

export interface articleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
