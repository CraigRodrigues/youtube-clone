'use strict';

let videos = [];

function searchYoutube(query = '') {
    // fetch search results from youtube! Make sure to use your API key.
    return fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=15&part=snippet&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            videos = data.items;

            return videos;
        })
        .catch((err) => console.error(err));
}

const clearHTML = () => {
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('video-page').innerHTML = '';
};

const generateSearchResultCards = (videos) => {
    return videos.map(({snippet}, index) => {
        return `
            <div id="${index}" class="video-result">
                <img src="${snippet.thumbnails.medium.url}" class="thumbnail">
                <div class="title">${snippet.title}</div>
                <div class="description">${snippet.description}</div>
            </div>
        `;
    }).join('');
};

const generateVideoPageHTML = ({ url, title, channel, description }) => {
    return `
        <iframe width="608" height="342" src="${url}"></iframe>
        <div id="video-info">
            <div id="video-title">${title}</div>
            <div id="video-channel">${channel}</div>
            <div id="video-description">${description}</div>
        </div>
        <button id="home-button">Back to Homepage</button>
    `;
};

const handleEnter = (event) => {
    if (event.which === 13) {
        searchYoutube(event.target.value).then(videos => renderHomePage(videos));
    }
};

const addHomePageListeners = () => {
    const searchResults = document.getElementById('search-results');
    const searchInput = document.querySelector('input');
    const logo = document.getElementById('logo');

    logo.addEventListener('click', (event) => {
        let query = document.querySelector('input').value;

        searchYoutube(query).then(videos => renderHomePage(videos));
    });

    searchInput.addEventListener('keydown', handleEnter);

    // you will need modify this listener to correctly use renderVideoPage
    searchResults.addEventListener('click', function(event) {
        if (event.target.className === 'thumbnail' || event.target.className === 'title') {
            renderVideoPage(event.target.parentElement.id);
        }
    });
};

const addVideoPageListeners = () => {
    document.getElementById('home-button').addEventListener('click', (event) => {
        let query = document.querySelector('input').value;

        searchYoutube(query).then(videos => renderHomePage(videos));
    });
};

const renderHomePage = (searchResults = videos) => {
    clearHTML();

    // show search bar and results
    document.getElementById('search-bar').style.display = 'flex';
    document.getElementById('search-results').style.display = 'grid';
    document.getElementById('search-results').innerHTML = generateSearchResultCards(searchResults);
    window.scrollTo(0,0);

    addHomePageListeners();
};

// you will need to edit this function to make use of an index
const renderVideoPage = (index) => {
    clearHTML();

    // hide search bar and search results
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('search-results').style.display = 'none';

    // it is good practice to remove event listeners if the element is just hidden
    // or remove element entirely, rather than hiding
    document.querySelector('input').removeEventListener('keydown', handleEnter);

    let video = videos[index];
    let videoObj = {
        url: `http://www.youtube.com/embed/${video.id.videoId}`,
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        description: video.snippet.description
    };

    document.getElementById('video-page').innerHTML = generateVideoPageHTML(videoObj);
    window.scrollTo(0,100);
    addVideoPageListeners();
};

// start on the homepage
searchYoutube().then(videos => renderHomePage(videos));
