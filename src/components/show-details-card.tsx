import defaultEpisodeImage from '../assets/episode-image.jpg'

type ShowDetailProps = {
    title: string,
    summary: string,
    duration: number,
    season: number,
    id: number
}
export const ShowDetailsCard = ({ season, id, title, summary, duration }: ShowDetailProps) => {
    return (
        <div style={{ display: 'flex' }}>
            <img
                src={defaultEpisodeImage}
                width={213}
                height={119}
                style={{
                    borderRadius: 8,
                    marginTop: 16
                }}
            />
            <div style={{ paddingLeft: 16 }} >
                <p>S{season}.EP{id} - {title}</p>
                <p>{duration} mins</p>
                <p>{summary}</p>
            </div>
        </div>
    )
}