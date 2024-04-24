import { useLoaderData } from 'react-router-dom'
import { MovieCard } from "./components/movie-card"
import { fetchAPI } from './api/fetch'
import { errorHandler } from './api/error-handler'

export const showsLoader = async () => {
    const shows = await fetchAPI({ url: 'https://api.tvmaze.com/shows', init: { method: 'GET' } })
    await errorHandler(shows)
    return { shows }
}

type ShowProps = {
    shows: Array<{
        id: number,
        url: string,
        name: string,
        image: { medium: string }
    }>
}

export const Home = () => {
    const { shows } = useLoaderData() as ShowProps
    return (
        <div className='container'>
            <h1 className='header'>TV Shows</h1>
            <div className='row'>
                {shows.slice(0, 50).map(({ id, image }) =>
                    <div key={id} className='col-2 col-md-3 col-sm-6' style={{ display: 'flex', justifyContent: 'center' }}>
                        <MovieCard id={id} imageURL={image.medium} />
                    </div>
                )}
            </div>
        </div>
    )
}
