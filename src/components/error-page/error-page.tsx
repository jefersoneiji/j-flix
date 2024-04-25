import { ErrorResponse, useRouteError } from "react-router-dom";
import './_error-page.scss'

export default function ErrorPage() {
    const error = useRouteError() as ErrorResponse;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.status|| ""}</i>
                <span>&nbsp;</span>
                <i>{error.data || error.statusText}</i>
            </p>
        </div>
    );
}