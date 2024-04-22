import { createBrowserRouter, useParams } from "react-router-dom";
import { App } from "./App";

export const MovieDetails = () => {
    const { movieId } = useParams()
    return (<>Movie details from {movieId} here!</>)
}
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/movie/:movieId',
        element: <MovieDetails />
    }
])