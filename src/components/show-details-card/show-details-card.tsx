import '../../css/_grid.scss'
import { ShowDetailProps } from './types'

export const ShowDetailsCard = ({ imageURL, season, number, title, summary, duration }: ShowDetailProps) => {
    return (
        <div className='row'>
            <div className='col-md-12 col-sm-12'>
                <img
                    src={imageURL}
                    width={213}
                    height={119}
                    style={{
                        borderRadius: 8,
                        marginTop: 16
                    }}
                />
            </div>
            <div className='col-10 col-md-12 col-sm-12'>
                <p className='header'><b>S{season}.EP{number} - {title}</b></p>
                <p className='subtitle'>{duration} mins</p>
                <p className='regular-text'>{summary}</p>
            </div>
        </div>
    )
}