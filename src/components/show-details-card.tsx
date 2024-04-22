import defaultEpisodeImage from '../assets/episode-image.jpg'
import '../css/_grid.scss'

type ShowDetailProps = {
    title: string,
    summary: string,
    duration: number,
    season: number,
    id: number
}
export const ShowDetailsCard = ({ season, id, title, summary, duration }: ShowDetailProps) => {
    return (
        <div className='row'>
            <div className='col-md-12 col-sm-12'>
                <img
                    src={defaultEpisodeImage}
                    width={213}
                    height={119}
                    style={{
                        borderRadius: 8,
                        marginTop: 16
                    }}
                />
            </div>
            <div className='col-10 col-md-12 col-sm-12' style={{ paddingLeft: 16 }} >
                <p><b>S{season}.EP{id} - {title}</b></p>
                <p>{duration} mins</p>
                <p>{summary}</p>
            </div>
        </div>
    )
}