import config from 'config';
import { authHeader } from '../_helpers';

export const gameService = {
    getAll,
    addGame,
};

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`${config.apiUrl}/games`, requestOptions).then(handleResponse);
}

function addGame(param) {

    let headerParam = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    } 
    Object.assign(headerParam, authHeader());
    const requestOptions = {
        method: 'POST',
        headers: headerParam,
        body: JSON.stringify(param)
    };

    return fetch(`${config.apiUrl}/games`, requestOptions).then(handleResponse).then(data => {
        console.log("SEND")
        console.log(data);
        return data;
    });
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
