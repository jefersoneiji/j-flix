import { useLoaderData } from 'react-router-dom'
import { MovieCard } from "./components/movie-card"

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
