import { LoaderFunctionArgs } from "react-router-dom"

import { errorHandler } from "../../api/error-handler"
import { fetchAPI } from "../../api/fetch"

export const showDetailsLoader = async ({ params }: LoaderFunctionArgs<{ params: { showId: number } }>) => {
    const showDetails = await fetchAPI({ url: `/shows/${params.showId}`, init: { method: 'GET' } })
    const showSeasons = await fetchAPI({ url: `/shows/${params.showId}/seasons`, init: { method: 'GET' } })

    await errorHandler(showDetails)
    await errorHandler(showSeasons)

    return { showDetails, showSeasons: showSeasons }
}