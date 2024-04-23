import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { Home, showsLoader } from "./home";
import { ShowDetails, showDetailsLoader } from "./show-details";

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