import { screen } from '@testing-library/react';
import { getRouteAbout, getRouteProfile } from '@/shared/consts/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';

describe('app/router/AppRouter', () => {
    test('Page should render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/sdjfsdjfl',
        });

        const page = await screen.findByTestId('NotFound');
        expect(page).toBeInTheDocument();
    });

    test('Unauthorized user redirected', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Authorized user profile', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { authData: {} },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    // TODO
    // test('Access denied(no role)', async () => {
    //     componentRender(<AppRouter />, {
    //         route: getRouteAdminPanel(),
    //         initialState: {
    //             user: { _inited: true, authData: { role: [UserRole.USER] } },
    //         },
    //     });

    //     const page = await screen.findByTestId('ForbiddenPage');
    //     expect(page).toBeInTheDocument();
    // });
});
