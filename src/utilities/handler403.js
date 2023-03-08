// import { redirect } from "react-router-dom"

export const handler403 = (response) => {
    if (response.status === 403) {
        // FIXME: why doesn't redirect("/login") work here? It's recommended when you can't use useNavigate.
        window.location.pathname = "/login";
    }
    return response
}