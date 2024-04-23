export const errorHandler = async (fieldName: Response) => {
    if (fieldName?.ok === false) {
        const response = await fieldName.json()
        throw new Response("", {
            status: fieldName.status,
            statusText: response.name
        })
    }
}