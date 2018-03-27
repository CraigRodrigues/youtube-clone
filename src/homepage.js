import { clearHTML, searchYoutube, currentVideos } from './utils.js';
import { videopage } from './videopage.js';

class HomePage {
    constructor() {
        document.getElementById('logo').addEventListener('click', (event) => this.render());
        document.querySelector('input').addEventListener('keydown', (event) => this.handleEnter(event));
    }

    generateSearchResultCards(videos) {
        return videos.map((video, index) => {
            return `
                <div id="${index}" class="video-result">
                    <img src="${video.snippet.thumbnails.medium.url}" class="thumbnail">
                    <div class="title">${video.snippet.title}</div>
                    <div class="description">${video.snippet.description}</div>
                </div>
            `;
        }).join('');
    }

    handleEnter(event) {
        if (event.which === 13) {
            searchYoutube(event.target.value).then((videos) => this.render(videos));
        }
    }

    addListeners() {
        const searchResults = document.getElementById('search-results');
    
        searchResults.addEventListener('click', (event) => {
            if (event.target.className === 'thumbnail' || event.target.className === 'title') {
                let video = currentVideos[event.target.parentElement.id];
    
                videopage.render(video);
            }
        });
    }

    render(searchResults = currentVideos) {
        clearHTML();

        // show search bar and results
        document.getElementById('search-bar').style.display = 'flex';
        document.getElementById('search-results').style.display = 'grid';
        document.getElementById('search-results').innerHTML = this.generateSearchResultCards(searchResults);
        window.scrollTo(0,0);
    
        this.addListeners();
    } 
}

export const homepage = new HomePage();