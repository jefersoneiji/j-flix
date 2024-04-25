export type ShowDetailsProps = {
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

export type EpisodeProps = {
    name: string,
    number: number,
    season: number,
    id: number,
    runtime: number,
    summary: string,
    image?: { medium?: string },
}