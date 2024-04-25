export type ShowProps = {
    shows: Array<{
        id: number,
        url: string,
        name: string,
        image: { medium: string }
    }>
}