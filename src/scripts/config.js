const CONFIG = {
  BASE_URL: 'https://story-api.dicoding.dev/v1',
};

const TOKEN_KEY = 'dicoding_token';

export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export default CONFIG;
