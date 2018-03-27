import { clearHTML, searchYoutube, currentVideos } from './utils.js';
import renderVideoPage from './videopage.js';

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

const handleEnter = (event) => {
    if (event.which === 13) {
        searchYoutube(event.target.value).then((videos) => renderHomePage(videos));
    }
};

const addHomePageListeners = () => {
    const searchResults = document.getElementById('search-results');
    const searchInput = document.querySelector('input');
    const logo = document.getElementById('logo');

    logo.addEventListener('click', (event) => renderHomePage());
    searchInput.addEventListener('keydown', handleEnter);

    // you will need modify this listener to correctly use renderVideoPage
    searchResults.addEventListener('click', function(event) {
        if (event.target.className === 'thumbnail' || event.target.className === 'title') {
            let video = currentVideos[event.target.parentElement.id];

            renderVideoPage(video);
        }
    });
};

const renderHomePage = (searchResults = currentVideos) => {
    clearHTML();

    // show search bar and results
    document.getElementById('search-bar').style.display = 'flex';
    document.getElementById('search-results').style.display = 'grid';
    document.getElementById('search-results').innerHTML = generateSearchResultCards(searchResults);
    window.scrollTo(0,0);

    addHomePageListeners();
};

export { handleEnter, renderHomePage };
