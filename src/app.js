'use strict';

const searchYoutube = (query) => {
    // fetch search results from youtube! Make sure to use your API key.
}

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

const renderHomePage = () => {
    clearHTML();

    // show search bar and results
    document.getElementById('search-bar').style.display = 'flex';
    document.getElementById('search-results').style.display = 'grid';

    let videoArray = Array(15).fill(fakeData.items[0]);

    document.getElementById('search-results').innerHTML = generateSearchResultCards(videoArray).join('');
    addHomePageListeners();
}

// you will need to edit this function to make use of an index
const renderVideoPage = (index) => {
    clearHTML();

    // hide search bar and search results
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('search-results').style.display = 'none';

    let url = 'http://www.youtube.com/embed/xLvkFer6aOY';
    let title = 'Title';
    let channel = 'Channel';
    let description = 'Thor: Ragnarok Darryl Short - Grandmaster Moves To Earth (2017) Jeff Goldblum Movie HD Subscribe for more official Trailers, TV Spots, Movie Clips, Featurettes and exclusive content!';
    
    document.getElementById('video-page').innerHTML = generateVideoPageHTML({ url, title, channel, description });
    addVideoPageListeners();
}

// start on the homepage
renderHomePage();
