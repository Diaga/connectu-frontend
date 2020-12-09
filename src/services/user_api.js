import {userUrl, authUrl, jsonFetch, getHeaders} from './utils';

export async function saveUser() {
    const user = await getSelfUser();
    localStorage.setItem('user', JSON.stringify(user));
}

export function getUserFromStorage() {
    return JSON.parse(localStorage.getItem('user'));
}

export function logout() {
    localStorage.removeItem('token');
}

export function isUserLoggedIn() {
    return localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null;
}

export async function authToken({email, password}) {
    const response = await jsonFetch({
        fetchPromise: fetch(
            authUrl, {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
    });
    localStorage.setItem('token', response.token);
    await saveUser();

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
                headers: getHeaders(),
                body: JSON.stringify(body)
            }
        )
    });
}

export async function getSelfUser() {
    return (await jsonFetch({
        fetchPromise: fetch(
            `${userUrl}?is_me=true`,
            {
                headers: getHeaders(),
            }
        )
    }))[0];
}

