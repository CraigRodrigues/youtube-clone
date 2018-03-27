import { clearHTML } from './utils.js';
import { homepage } from './homepage.js';

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

const addVideoPageListeners = () => {
    document.getElementById('home-button').addEventListener('click', (event) => homepage.render());
};

// you will need to edit this function to make use of an index
const renderVideoPage = (video) => {
    clearHTML();

    // hide search bar and search results
    document.getElementById('search-bar').style.display = 'none';
    document.getElementById('search-results').style.display = 'none';

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

export default renderVideoPage;
