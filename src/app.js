'use strict';

const clearHTML = () => {
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('video-page').innerHTML = '';
}

const generateSearchResultCards = (videos) => {
    return videos.map((video, index) => {
        return `
            <div id="${index}" class="video-result">
                <img src="${video.snippet.thumbnails.medium.url}" class="thumbnail">
                <div class="title">${video.snippet.title}</div>
                <div class="description">${video.snippet.description}</div>
            </div>
        `
    });
}

const generateVideoPageHTML = ({ url, title, channel, description }) => {
    return `
        <iframe width="608" height="342" src="${url}"></iframe>
        <div id="video-info">
            <div id="video-title">${title}</div>
            <div id="video-channel">${channel}</div>
            <div id="video-description">${description}</div>
        </div>
        <button id="home-button">Back to Homepage</button>
    `
}

const addHomePageListeners = () => {
    var searchResults = document.getElementById('search-results');
    var searchInput = document.querySelector('input');

    searchInput.addEventListener('keypress', event => {
        if (event.which === 13) {
            searchYoutube(searchInput.value)
        }
    });

    // you will need modify this listener to correctly use renderVideoPage
    searchResults.addEventListener('click', function(event) {
        if (event.target.className === 'thumbnail' || event.target.className === 'title') {
            renderVideoPage();
        }
    });
}

const addVideoPageListeners = () => {
    // your code here
}

const renderHomePage = (query, searchResults) => {
    clearHTML();

    // show search bar and results
    document.getElementById('search-bar').style.display = 'flex';
    document.getElementById('search-results').style.display = 'grid';
    document.getElementById('search-results').innerHTML = generateSearchResultCards(searchResults).join('');

    addHomePageListeners();
}

const searchYoutube = (query) => {
    // fetch search results from youtube! Make sure to use your API key.
    fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&maxResults=15&part=snippet&key=${API_KEY}`)
        .then(res => res.json())
        .then(data => renderHomePage(query, data.items))
        .catch(err => console.error(err));
}

// you will need to edit this function to make use of an index
const renderVideoPage = (index) => {
    clearHTML();

    // hide search bar and search results
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('search-results').style.display = 'none';
    
    // it is good practice to remove event listeners if the element is just hidden
    // document.querySelector('input').removeEventListener('keypress', func);

    let url = 'http://www.youtube.com/embed/xLvkFer6aOY';
    let title = 'Title';
    let channel = 'Channel';
    let description = 'Thor: Ragnarok Darryl Short - Grandmaster Moves To Earth (2017) Jeff Goldblum Movie HD Subscribe for more official Trailers, TV Spots, Movie Clips, Featurettes and exclusive content!';
    
    document.getElementById('video-page').innerHTML = generateVideoPageHTML({ url, title, channel, description });
    addVideoPageListeners();
}

const init = (query) => {
    searchYoutube(query);
    document.querySelector('input').value = query;
}

// start on the homepage
init('Infinity War Trailer');
