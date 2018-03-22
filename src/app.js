'use strict';

function searchYoutube(query) {
    // fetch search results from youtube!
}

function clearHTML() {
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('video-page').innerHTML = '';
}

function generateSearchResultCard(index, thumbnailURL, title, description) {
    var cardDiv = document.createElement('div');
    var thumbnailImg = document.createElement('img');
    var titleDiv = document.createElement('div');
    var descriptionDiv = document.createElement('div');

    thumbnailImg.src = thumbnailURL;

    titleDiv.innerText = title;
    titleDiv.className = 'title';
    titleDiv.id = index;

    descriptionDiv.innerText = description;
    descriptionDiv.className = 'description';

    cardDiv.className = 'video-result';
    cardDiv.append(thumbnailImg, titleDiv, descriptionDiv);

    return cardDiv;
}

function generateIframe(source) {
    var iframe = document.createElement('iframe');

    iframe.width = 608;
    iframe.height = 342;
    iframe.src = source;

    return iframe;
}

function generateHomeButton() {
    var homeButton = document.createElement('button');

    homeButton.id = 'home-button';
    homeButton.innerText = 'Back to Homepage';

    return homeButton;
}

function generateVideoInfo(title, channel, description) {
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

function addHomePageListeners() {
    var searchResults = document.getElementById('search-results');

    searchResults.addEventListener('click', function(event) {
        renderVideoPage();
    });
}

function addVideoPageListeners() {
    // your code here
}

function renderHomePage() {
    clearHTML();

    // show search bar and results
    document.getElementById('search-bar').style.display = 'block';
    document.getElementById('search-results').style.display = 'grid';
    
    var searchResults = document.getElementById('search-results');
    var video = fakeData.items[0];

    var thumbnail = video.snippet.thumbnails.medium.url;
    var title = video.snippet.title;
    var description = video.snippet.description;

    // change this to render the top 15 results from youtube
    // do not use a regular for loop!
    for (var i = 0; i < 15; i++) {
        var video = generateSearchResultCard(i, thumbnail, title, description);

        searchResults.appendChild(video);
    }

    addHomePageListeners();
}

function renderVideoPage(index) {
    clearHTML();

    // hide search bar and search results
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('search-results').style.display = 'none';

    var videoPage = document.getElementById('video-page');

    var thorDescription = 'Thor: Ragnarok Darryl Short - Grandmaster Moves To Earth (2017) Jeff Goldblum Movie HD Subscribe for more official Trailers, TV Spots, Movie Clips, Featurettes and exclusive content!';
    var iframe = generateIframe('http://www.youtube.com/embed/xLvkFer6aOY');
    var homeButton = generateHomeButton();
    var videoInfo = generateVideoInfo('Title', 'Channel', thorDescription);
    
    videoPage.append(iframe, videoInfo, homeButton);

    addVideoPageListeners();
}

renderHomePage();