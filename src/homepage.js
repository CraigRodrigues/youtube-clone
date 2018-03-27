import API_KEY from './config.js';
import clearHTML from './utils.js';
import renderVideoPage from './videopage.js';

let videos = [];

const generateSearchResultCards = (videos) => {
    return videos.map((video, index) => {
        return `
            <div id="${index}" class="video-result">
                <img src="${video.snippet.thumbnails.medium.url}" class="thumbnail">
                <div class="title">${video.snippet.title}</div>
                <div class="description">${video.snippet.description}</div>
            </div>
        `;
    }).join('');
};

export function handleEnter(event) {
    if (event.which === 13) {
        searchYoutube(event.target.value);
    }
};

const addHomePageListeners = () => {
    const searchResults = document.getElementById('search-results');
    const searchInput = document.querySelector('input');
    const logo = document.getElementById('logo');

    logo.addEventListener('click', (event) => {
        let query = document.querySelector('input').value;

        searchYoutube(query);
    });

    searchInput.addEventListener('keydown', handleEnter);

    // you will need modify this listener to correctly use renderVideoPage
    searchResults.addEventListener('click', function(event) {
        if (event.target.className === 'thumbnail' || event.target.className === 'title') {
            renderVideoPage(event.target.parentElement.id);
        }
    });
};

const renderHomePage = (query, searchResults) => {
    clearHTML();

    // show search bar and results
    document.getElementById('search-bar').style.display = 'flex';
    document.getElementById('search-results').style.display = 'grid';
    document.getElementById('search-results').innerHTML = generateSearchResultCards(searchResults);
    window.scrollTo(0,0);

    addHomePageListeners();
};

export function searchYoutube(query = '') {
    // fetch search results from youtube! Make sure to use your API key.
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=15&part=snippet&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            videos = data.items;
            renderHomePage(query, data.items);
        })
        .catch((err) => console.error(err));
};
