import { createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { Home } from "./home";
import { ShowDetails } from "./show-details";
import { fetchAPI } from "./api/fetch";

const showsLoader = async () => {
    const shows = await fetchAPI({ url: 'https://api.tvmaze.com/shows', init: { method: 'GET' } })
    return { shows }
}

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
                element: <ShowDetails />
            }
        ]
    },

])