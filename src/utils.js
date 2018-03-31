import { API_KEY } from './config.js';

let currentVideos = [];

const clearHTML = () => {
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('video-page').innerHTML = '';
};

const searchYoutube = async (query = '') => {
    let data = null;
    let url = 
        `https://www.googleapis.com/youtube/v3/search?q=${query}` +
        `&maxResults=15&part=snippet&key=${API_KEY}`;

    try {
        data = await (await fetch(url)).json();
    } catch (e) {
        console.error(e);
    };

    currentVideos = data.items;

    return currentVideos;
};

export { clearHTML, searchYoutube, currentVideos };
