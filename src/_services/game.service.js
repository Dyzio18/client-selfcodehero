import config from 'config';
import { authHeader } from '../_helpers';

export const gameService = {
  getAll,
  addGame,
  getMyGames,
  getGame,
  updateGame,
};

function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/games`, requestOptions).then(handleResponse);
}

function getMyGames() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/games/my`, requestOptions).then(handleResponse);
}

function getGame(param) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${config.apiUrl}/games/${param.id}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
}

function addGame(param) {
  const headerParam = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  Object.assign(headerParam, authHeader());
  const requestOptions = {
    method: 'POST',
    headers: headerParam,
    body: JSON.stringify(param),
  };

  return fetch(`${config.apiUrl}/games`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
}

function updateGame(param) {
  const headerParam = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
  };

  Object.assign(headerParam, authHeader());

  delete param.data["id"];
  delete param.data["isEmailVerified"];
  delete param.data["players"];

  const requestOptions = {
    method: 'PATCH',
    headers: headerParam,
    body: JSON.stringify(param.data),
  };

  return fetch(`${config.apiUrl}/games/${param.id}`, requestOptions)
    .then(handleResponse)
    .then((data) => {
      return data;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // TODO: check || logout
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
