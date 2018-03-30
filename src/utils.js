import { API_KEY } from './config.js';

let currentVideos = [];

const clearHTML = () => {
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('video-page').innerHTML = '';
};

const searchYoutube = (query = '') => {
    return fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=15&part=snippet&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            currentVideos = data.items;

            return currentVideos;
        })
        .catch((err) => console.error(err));
};

export { clearHTML, searchYoutube, currentVideos };
