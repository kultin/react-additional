import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = ({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div
            key={block.id}
            className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
        >
            <img alt={block.title} src={block.src} />
            {block.title && (
                <Text text={block.title} align={TextAlign.CENTER} />
            )}
        </div>
    );
};
