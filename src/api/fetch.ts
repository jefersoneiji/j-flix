interface Request extends RequestInit {
    method: 'GET' | 'POST'
}
type FetchAPIProps = {
    url: RequestInfo | URL,
    init?: Request
}
export const fetchAPI = async ({ url, init }: FetchAPIProps) => {
    const response = await fetch(url, init)
    return response.json()
}