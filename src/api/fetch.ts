interface Request extends RequestInit {
    method: 'GET' | 'POST'
}
type FetchAPIProps = {
    url: RequestInfo | URL,
    init?: Request
}
export const fetchAPI = async ({ url, init }: FetchAPIProps) => {
    try {
        const response = await fetch(url, init)
        
        if (!response.ok) {
            return response
        } else {
            return response.json()
        }
    } catch (e) {
        throw new Response('', {
            statusText: String(e)
        })
    }
}