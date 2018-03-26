'use strict';

const searchYoutube = (query) => {
    // fetch search results from youtube! Make sure to use your API key.
}

const clearHTML = () => {
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('video-page').innerHTML = '';
}

const generateSearchResultCard = ({ index, thumbnailURL, title, description }) => {
    const cardDiv = document.createElement('div');
    const thumbnailImg = document.createElement('img');
    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');

    thumbnailImg.src = thumbnailURL;
    thumbnailImg.className = 'thumbnail';

    titleDiv.innerText = title;
    titleDiv.className = 'title';
    
    descriptionDiv.innerText = description;
    descriptionDiv.className = 'description';
    
    cardDiv.id = index;
    cardDiv.className = 'video-result';
    cardDiv.append(thumbnailImg, titleDiv, descriptionDiv);

    return cardDiv;
}

const generateIframe = (source) => {
    const iframe = document.createElement('iframe');

    iframe.width = 608;
    iframe.height = 342;
    iframe.src = source;

    return iframe;
}

const generateHomeButton = () => {
    const homeButton = document.createElement('button');

    homeButton.id = 'home-button';
    homeButton.innerText = 'Back to Homepage';

    return homeButton;
}

const generateVideoInfo = ({ title, channel, description }) => {
    var videoInfoDiv = document.createElement('div');
    var titleDiv = document.createElement('div');
    var channelDiv = document.createElement('div');
    var descriptionDiv = document.createElement('div');
    
    videoInfoDiv.id = 'video-info';
    titleDiv.id = 'video-title';
    channelDiv.id = 'video-channel';
    descriptionDiv.id = 'video-description';

    titleDiv.innerText = title;
    channelDiv.innerText = channel;
    descriptionDiv.innerText = description;

    videoInfoDiv.append(titleDiv, channelDiv, descriptionDiv);

    return videoInfoDiv;
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
    
    const searchResults = document.getElementById('search-results');
    const video = fakeData.items[0];

    let thumbnail = video.snippet.thumbnails.medium.url;
    let title = video.snippet.title;
    let description = video.snippet.description;

    // change this to render the top 15 results from youtube
    // do not use a regular for loop!
    for (let i = 0; i < 15; i++) {
        let video = generateSearchResultCard({ index: i, thumbnailURL: thumbnail, title, description });

        searchResults.appendChild(video);
    }

    addHomePageListeners();
}

// you will need to edit this function to make use of an index
const renderVideoPage = (index) => {
    clearHTML();

    // hide search bar and search results
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('search-results').style.display = 'none';

    const videoPage = document.getElementById('video-page');

    let thorDescription = 'Thor: Ragnarok Darryl Short - Grandmaster Moves To Earth (2017) Jeff Goldblum Movie HD Subscribe for more official Trailers, TV Spots, Movie Clips, Featurettes and exclusive content!';
    let iframe = generateIframe('http://www.youtube.com/embed/xLvkFer6aOY');
    let homeButton = generateHomeButton();
    let videoInfo = generateVideoInfo({ title: 'Title', channel: 'Channel', description: thorDescription });
    
    videoPage.append(iframe, videoInfo, homeButton);

    addVideoPageListeners();
}

// start on the homepage
renderHomePage();
