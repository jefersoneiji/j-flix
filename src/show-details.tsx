import { LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import dayjs from 'dayjs'
import { ChangeEvent, useEffect, useState } from "react"

import { ShowDetailsCard } from "./components/show-details-card"
import './css/_grid.scss'
import './css/_fonts.scss'

import { fetchAPI } from "./api/fetch"
import defaultEpisodeImage from './assets/episode-image.jpg'
import defaultShowImage from './assets/show-image.jpg'
import { errorHandler } from "./api/error-handler"

export const showDetailsLoader = async ({ params }: LoaderFunctionArgs<{ params: { showId: number } }>) => {
    const showDetails = await fetchAPI({ url: `/shows/${params.showId}`, init: { method: 'GET' } })
    const showSeasons = await fetchAPI({ url: `/shows/${params.showId}/seasons`, init: { method: 'GET' } })

    await errorHandler(showDetails)
    await errorHandler(showSeasons)

    return { showDetails, showSeasons: showSeasons }

}

type ShowDetails = {
    showDetails: {
        image?: { medium?: string },
        summary: string,
        name: string,
        status: string,
        premiered: string,
        genres: Array<string>,
        ended: string,
        rating: { average: number }
    },
    showSeasons: Array<{
        number: number,
        id: number
    }>
}

const cleanHTMLTags = (input: string, truncate: boolean = true) => {
    const cleaned = input.replace(/<\/?[^>]+(>|$)/g, "")
    const truncated = cleaned.length > 500 && truncate ? cleaned.slice(0, 500) + "..." : cleaned
    return truncated
};

export const ShowDetails = () => {
    const { showDetails, showSeasons: seasons } = useLoaderData() as ShowDetails
    const { name, summary, image, rating, status, premiered, ended, genres } = showDetails

    return (
        <>
            <div className="container">
                <div className="row" style={{ marginTop: 42, marginBottom: 42 }}>
                    <div className="col-sm-12">
                        <img src={image?.medium || defaultShowImage} width={200} height={300} style={{ borderRadius: 8 }} />
                    </div>
                    <div className="col-10 col-sm-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p className="header" style={{ margin: 0, fontSize: 20 }}>{name} - Rating {rating.average}</p>
                        <p className="subtitle" style={{ margin: 0, fontSize: 16, paddingTop: 8 }}>Genres: {genres.join(', ')}</p>
                        <p className="subtitle" style={{ margin: 0, paddingTop: 0, paddingBottom: 16 }}>Seasons {seasons.length} - Airing {dayjs(premiered).format('DD MMM YYYY')} to {ended ? dayjs(ended).format('DD MMM YYYY') : status}</p>
                        <p className="regular-text" style={{ margin: 0 }}>{cleanHTMLTags(summary, false)}</p>
                    </div>
                </div>
            </div>
            <EpisodesBySeason seasons={seasons} />
        </>
    )
}

type EpisodeProps = {
    name: string,
    number: number,
    season: number,
    id: number,
    runtime: number,
    summary: string,
    image?: { medium?: string },
}
const EpisodesBySeason = ({ seasons }: { seasons: ShowDetails['showSeasons'] }) => {
    const [season, setSeason] = useState(seasons[0].id)
    const onChangeSeason = (e: ChangeEvent<HTMLSelectElement>) => setSeason(Number(e.target.value))

    const [episodes, setEpisodes] = useState<EpisodeProps[] | []>([])

    useEffect(() => {
        const fetchEpisodes = async () => {
            const episodes = await fetchAPI({ url: `/seasons/${season}/episodes`, init: { method: 'GET' } })
            setEpisodes(episodes)
        }
        fetchEpisodes()
    }, [season])

    return (
        <div className="container">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 className="header" style={{ margin: 0 }}>Episodes</h1>
                <select
                    name="seasons"
                    value={season}
                    onChange={onChangeSeason}
                    style={{ maxHeight: 20, marginLeft: 30 }}
                >
                    {seasons.map(({ id }, idx) =>
                        <option key={idx} value={`${id}`}>Season {idx + 1}</option>
                    )}
                </select>
            </div>
            {episodes.map(({ name, number, season, id, runtime, summary, image }) =>
                <ShowDetailsCard
                    key={id}
                    number={number}
                    imageURL={image?.medium || defaultEpisodeImage}
                    title={name}
                    season={season}
                    duration={runtime}
                    summary={cleanHTMLTags(summary || '')}
                />
            )}
        </div >
    )
}

