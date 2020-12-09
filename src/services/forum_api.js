import {getHeaders, jsonFetch, questionUrl, upvoteUrl} from './utils';


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

export async function updateUpvote({question, answer, hasUpvoted}) {
    return await jsonFetch({fetchPromise: fetch(
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
        )})
}

