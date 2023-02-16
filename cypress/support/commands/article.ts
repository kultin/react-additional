import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Test article',
    userId: '1',
    subtitle: "What's new in TS in 2022",
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--oIqU795h--/c_limit%2Cf'
    + '_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/1400/1%2AGh4eaAQU432ZQH7qsVbJ_A.png',
    views: 1022,
    createdAt: '14.11.2022',
    type: [
        'IT',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles/',
    headers: { Authorization: 'ssss' },
    body: article ?? defaultArticle,
}).then((resp) => resp.body);

export const removeArticle = (articleId: string) => cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'ssss' },
});

declare global {
namespace Cypress {
  interface Chainable {
    createArticle(article?: Article): Chainable<Article>
    removeArticle(articleId: string): Chainable<void>
  }
}
}
