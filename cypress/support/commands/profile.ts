export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditBtn').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveBtn').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'ssss' },
    body: {
        id: '4',
        firstname: 'Test',
        lastname: 'User',
        age: 22,
        currency: 'RUB',
        country: 'Russia',
        city: 'NN',
        username: 'testuser',
        avatar: 'bit.ly/3YSNpAv',
    },
});

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
