import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('NOT Auth user', () => {
        it('Open Main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Redirect to MainPage', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Open Not Found Page', () => {
            cy.visit('/zzzzzz');
            cy.get(selectByTestId('NotFound')).should('exist');
        });
    });
    describe('Auth user', () => {
        beforeEach('login', () => {
            cy.login('admin', '123');
        });
        it('Redirect to ProfilePage', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Opens ArticlesPage', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
