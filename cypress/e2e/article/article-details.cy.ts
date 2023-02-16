let currentArticleId = '';

describe('Article Details', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.log(JSON.stringify(article));
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it.skip('See the details', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it.skip('See recommendation list', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it.skip('Send comment', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('TEST TEXT');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('Rates article', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
        cy.getByTestId('RatingCard').should('exist');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
