import { login } from './commands/login';

Cypress.Commands.add('login', login);

declare global {
  namespace Cypress {
    interface Chainable {
      login(login?: string, password?: string): Chainable<void>
    }
  }
}

export {};
