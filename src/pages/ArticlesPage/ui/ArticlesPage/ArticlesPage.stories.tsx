import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Article } from '@/entities/Article';
import { ArticleBlockType, ArticleType } from '@/entities/Article/model/consts/articleConsts';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const article: Article = {
    id: '1',
    title: 'Typescript news',
    subtitle: "What's new in TS in 2022",
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--oIqU795h--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png',
    views: 1022,
    user: {
        id: '1',
        username: 'admin',
    },
    createdAt: '14.11.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                'Привет! Это моя первая статья на Хабре и в ней я хочу рассказать про такой язык, как TypeScript, и почему именно на нем вместо Javascript ты должен начать писать уже в этом году! В данной статье приведу 2 примера, когда TypeScript поможет нам избежать ошибки или подскажет, что что-то не так. Погнали!',
                'Пока что все в порядке. Но если аргументы в функции sum поменяются на string тип а в функции concatenation на number, то и тип возвращаемого результата и сам результат поменяются, и будут некорректными',
                'Но что будет, если передать в аргумент ключ, которого нет в объекте? Обычный Javascript пропустит эту ошибку. Но мы можем превентивно описать типы так, чтобы если мы уже знаем, что за объект у нас будет и какие у него ключи, мы не пропустим ключ, которого нет в объекте!',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: 'function sum (a,b) {\n  return a + b;\n}\n\nconsole.log(sum(1,2)); // Вернет 3',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                'Возьмем простую функцию, которая возвращает из объекта, который передан в аргументе функции, значение по ключу, которое передано в втором аргументе функции.',
                'Но что будет, если передать в аргумент ключ, которого нет в объекте? Обычный Javascript пропустит эту ошибку. Но мы можем превентивно описать типы так, чтобы если мы уже знаем, что за объект у нас будет и какие у него ключи, мы не пропустим ключ, которого нет в объекте!',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/r/w1560/webt/tq/8c/g_/tq8cg_0a-c2jojq3_vabbix76pg.jpeg',
            title: 'Example using utilities',
        },
        {
            id: '3',
            type: ArticleBlockType.CODE,
            code: 'function concatenation (a,b) {\n  return a + b;\n}\n\nconsole.log(sum(1,2)); // Вернет 3',
        },
        {
            id: '6',
            type: ArticleBlockType.TEXT,
            title: 'Title of this block',
            paragraphs: [
                'Возьмем простую функцию, которая возвращает из объекта, который передан в аргументе функции, значение по ключу, которое передано в втором аргументе функции.',
                'Но что будет, если передать в аргумент ключ, которого нет в объекте? Обычный Javascript пропустит эту ошибку. Но мы можем превентивно описать типы так, чтобы если мы уже знаем, что за объект у нас будет и какие у него ключи, мы не пропустим ключ, которого нет в объекте!',
            ],
        },
        {
            id: '7',
            type: ArticleBlockType.IMAGE,
            src: 'https://habrastorage.org/r/w1560/webt/tq/8c/g_/tq8cg_0a-c2jojq3_vabbix76pg.jpeg',
            title: 'Example using utilities',
        },
        {
            id: '8',
            type: ArticleBlockType.CODE,
            code: 'function sum (a,b) {\n  return a + b;\n}\n\nconsole.log(sum(1,2)); // Вернет 3',
        },
    ],
};

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
})];
