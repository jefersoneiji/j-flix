import { App } from "../../../App"
import { Home } from "../../../modules/home/home"
import { ShowDetails } from "../../../modules/show-details/show-details"

import mockMovieCard from './mock-movie-card.json'
import mockShowDetails from '../../../modules/show-details/__tests__/mock-show-details.json'
import mockShowSeasons from '../../../modules/show-details/__tests__/mock-show-seasons.json'

const mockLoader = () => {
    return { shows: mockMovieCard }
}

const showDetailsLoader = () => {
    return { showDetails: mockShowDetails, showSeasons: mockShowSeasons }
}

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: mockLoader
            },
            {
                path: '/show/:showId',
                element: <ShowDetails />,
                loader: showDetailsLoader
            }
        ]
    },
]