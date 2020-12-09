
export const rootUrl = 'http://0.0.0.0:8000/api/';
export const authUrl = `${rootUrl}token/`;
export const coreUrl = `${rootUrl}core/`;
export const userUrl = `${coreUrl}user/`;
export const questionUrl = `${coreUrl}question/`;
export const upvoteUrl = `${coreUrl}upvote/`



export function getHeaders() {
    let headers = {
        'Content-Type': 'application/json'
    }
    const token = localStorage.getItem('token');
    if (token !== undefined) {
        headers['Authorization'] = `Token ${token}`;
    }

    return headers;
}


export async function jsonFetch({fetchPromise}) {
    const response = await fetchPromise;
    if (!response.ok) {
        throw Error('Request failed');
    }
    return await response.json();
}

export function isUserLoggedIn() {
    return localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined;
}
