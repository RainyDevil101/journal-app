import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { JournalRouter, JournalRoutes } from '../journal/routes';
import { AuthRouter, AuthRoutes } from '../auth/routes';


const router = createBrowserRouter([
    {
        path: '/auth/*',
        element: (<AuthRouter />),
        children: AuthRoutes
    },
    {
        path: '/',
        element: (<JournalRouter />),
        children: JournalRoutes
    },
    {
        path: "/*",
        element: <Navigate to={"/"} />,
    },
]);

export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
};
