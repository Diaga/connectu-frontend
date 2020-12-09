import {getHeaders, jsonFetch, questionUrl, upvoteUrl, answerUrl} from './utils';


export async function getQuestion({id}) {
    return await jsonFetch({
        fetchPromise: fetch(
            `${questionUrl}${id}/`, {
                headers: getHeaders(),
            }
        )
    })
}

export async function getQuestions() {
    return await jsonFetch({
        fetchPromise: fetch(
            questionUrl, {
                headers: getHeaders()
            }
        )
    });
}

export async function createQuestion({text}) {
    return await jsonFetch({
        fetchPromise: fetch(
            questionUrl, {
                headers: getHeaders(),
                method: 'POST',
                body: JSON.stringify({
                    title: text,
                })
            }
        )
    });
}

export async function createAnswer({text, question}) {
    return await jsonFetch({
        fetchPromise: fetch(
            answerUrl, {
                headers: getHeaders(),
                method: 'POST',
                body: JSON.stringify({
                    text: text,
                    question: question
                })
            }
        )
    });
}

export async function updateUpvote({question, answer, hasUpvoted}) {
    return await jsonFetch({
        fetchPromise: fetch(
            upvoteUrl,
            {
                method: 'POST',
                headers: getHeaders(),
                body: JSON.stringify({
                    question: question,
                    answer: answer,
                    has_upvoted: hasUpvoted
                })
            }
        )
    })
}

