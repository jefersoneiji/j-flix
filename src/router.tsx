import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./home";
import { ShowDetails } from "./show-details";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path: '/show/:showId',
                element: <ShowDetails />
            }
        ]
    },

])