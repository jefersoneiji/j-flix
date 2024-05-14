import { App } from "../../../App"
import { ShowDetails } from "../show-details"
import mockShowDetails from './mock-show-details.json'
import mockShowSeasons from './mock-show-seasons.json'

const showDetailsLoader = () => {
    return { showDetails: mockShowDetails, showSeasons: mockShowSeasons }
}

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/show/:showId',
                element: <ShowDetails />,
                loader: showDetailsLoader
            }
        ]
    },
]