import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/consts/localStorage';

export const login = (username: string = 'testuser', password: string = 'testpassword') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
        failOnStatusCode: false, // TODO
    }).then(({ body }) => {
        console.log('BODY', body);
        window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body));
    });
};
