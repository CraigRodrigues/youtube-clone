import { clearHTML } from './utils.js';
import { homepage } from './homepage.js';

class VideoPage {
    template({ url, title, channel, description }) {
        return `
            <iframe width="608" height="342" src="${url}"></iframe>
            <div id="video-info">
                <div id="video-title">${title}</div>
                <div id="video-channel">${channel}</div>
                <div id="video-description">${description}</div>
            </div>
            <button id="home-button">Back to Homepage</button>
        `;
    }

    addListeners() {
        document.getElementById('home-button').addEventListener('click', (event) => homepage.render());   
    }

    render(video) {
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
    
        document.getElementById('video-page').innerHTML = this.template(videoObj);
        window.scrollTo(0,100);
        this.addListeners();
    }
}

export const videopage = new VideoPage();
