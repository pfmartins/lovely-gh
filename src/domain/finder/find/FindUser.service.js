const TMP_TOKEN = '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';

const DEFAULT_HEADERS = {
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
    Authorization: `token ${TMP_TOKEN}`
}

const getUserByname = async (username = '') => {
    const result = await fetch(`https://api.github.com/users/${username}`, {
        Method: 'get',
        Headers: DEFAULT_HEADERS
    });

    if(result.status === 404) {
        return new Promise((resolve, reject) => reject({error: result.status}))
    }

    return await result.json();
}

const getRepoByUser = async (repoUrl = '') => {
    if(!repoUrl) return;

    const result = await fetch(`${repoUrl}`, {
        Method: 'get',
        Headers: DEFAULT_HEADERS
    });


    if(result.status === 404) {
        return new Promise((resolve, reject) => reject({error: result.status}))
    }

    return await result.json();
}

const FindUserService = {
    getUserByName: getUserByname,
    getRepoByUser: getRepoByUser
}

export default FindUserService;