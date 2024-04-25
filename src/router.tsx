import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { Home } from "./modules/home/home";
import { ShowDetails } from "./modules/show-details/show-details";
import { showsLoader } from "./modules/home/data-loaders";
import { showDetailsLoader } from "./modules/show-details/data-loaders";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
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

])