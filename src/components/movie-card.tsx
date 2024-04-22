import { Link } from 'react-router-dom'

import defaultImage from '../assets/show-image.jpg'

type MovieProps = {
    id: number,
}
export const MovieCard = ({ id }: MovieProps) => {
    return (
        <Link to={`show/${id}`} style={{ marginTop: 20 }}>
            <img
                src={defaultImage}
                width={137}
                height={193}
                alt={`show-card-${id}`}
                style={{ borderRadius: 8 }}
            />
        </Link>
    )
}