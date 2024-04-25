import { errorHandler } from "../../api/error-handler"
import { fetchAPI } from "../../api/fetch"

export const showsLoader = async () => {
    const shows = await fetchAPI({ url: '/shows', init: { method: 'GET' } })
    await errorHandler(shows)
    return { shows }
}