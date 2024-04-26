import { Navigate, createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { Home } from "./modules/home/home";
import { ShowDetails } from "./modules/show-details/show-details";
import { showsLoader } from "./modules/home/data-loaders";
import { showDetailsLoader } from "./modules/show-details/data-loaders";
import ErrorPage from "./components/error-page/error-page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: showsLoader
            },
            {
                path: '/show/:showId',
                element: <ShowDetails />,
                loader: showDetailsLoader
            }
        ]
    },
    { path: "*", element: <Navigate to="/" replace /> }

])