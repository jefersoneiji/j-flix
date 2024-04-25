import { useLoaderData } from 'react-router-dom'
import { MovieCard } from "../../components/movie-card/movie-card"
import { ShowProps } from './types'

export const Home = () => {
    const { shows } = useLoaderData() as ShowProps
    return (
        <div className='container'>
            <h1 className='header' style={{ marginTop: 0 }}>TV Shows</h1>
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
