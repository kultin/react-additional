import { selectByTestId } from '../../helpers/selectByTestId';
import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/consts/localStorage';

export const login = (username: string = 'testuser', password: string = 'testpassword') => cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
        authData: {
            username,
            password,
        },
    },
}).then(({ body }) => window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body)));

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      login(login?: string, password?: string): Chainable<any>
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}
