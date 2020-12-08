import {userUrl, authUrl} from './urls';

function _getHeaders() {
    let headers = {
        'Content-Type': 'application/json'
    }
    const token = localStorage.getItem('token');
    if (token !== undefined) {
        headers['Authorization'] = `Token ${token}`;
    }

    return headers;
}


async function jsonFetch({fetchPromise}) {
    const response = await fetchPromise;
    if (!response.ok) {
        throw Error('Request failed');
    }
    return await response.json();
}

export function isUserLoggedIn() {
    return localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined;
}

export function logout() {
    localStorage.removeItem('token');
}

export async function authToken({email, password}) {
    const response = await jsonFetch({
        fetchPromise: fetch(
            authUrl, {
                method: 'POST',
                headers: _getHeaders(),
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
    });
    localStorage.setItem('token', response.token);

    return response;
}

export async function createUser({username, email, password, role, degree, university, answer_1, answer_2, answer_3}) {
    let body = {
        name: username,
        email: email,
        password: password,
    }
    if (role === 'student') {
        body['student'] = {
            answer_1: answer_1,
            answer_2: answer_2,
            answer_3: answer_3
        };
    } else if (role === 'mentor') {
        body['degree'] = degree;
        body['university'] = {
            name: university
        };
    }

    return await jsonFetch({
        fetchPromise: fetch(
            userUrl, {
                method: 'POST',
                headers: _getHeaders(),
                body: JSON.stringify(body)
            }
        )
    });
}



