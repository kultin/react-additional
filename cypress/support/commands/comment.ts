import { Comment } from '../../../src/entities/Comment';

export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text);
    cy.getByTestId('AddCommentForm.SendBtn').click();
};

export const removeComment = (commentId: string) => {};

declare global {
namespace Cypress {
  interface Chainable {
    addComment(text:string): Chainable<Comment>
    removeComment(commentId: string): Chainable<void>
  }
}
}
