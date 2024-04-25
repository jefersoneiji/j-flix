import { Link } from 'react-router-dom'
import { MovieProps } from './types'

export const MovieCard = ({ id, imageURL }: MovieProps) => {
    return (
        <Link to={`show/${id}`} style={{ marginTop: 20 }}>
            <img
                src={imageURL}
                width={137}
                height={193}
                alt={`show-card-${id}`}
                style={{ borderRadius: 8 }}
            />
        </Link>
    )
}