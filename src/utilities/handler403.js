export const handler403 = (response) => {
    if (response.status === 403) {
        window.location.pathname = "/login";
    }
    return response
}