let profileId = '';

describe('User goes on ProfilePage', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.body.id;
            cy.visit(`profile/${data.body.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Loaded Successfully', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test');
    });
    it('Edit profile', () => {
        const newFirstName = 'new firstname';
        const newLastName = 'new lastname';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
    });
    // it('Edit profile', () => {
    //     cy.get(selectByTestId('ProfileCard.firstname')).should('have.value', 'Test');
    // });
});
