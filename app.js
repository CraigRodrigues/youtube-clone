var fakeData = {
    kind: 'youtube#searchListResponse',
    etag: '"RmznBCICv9YtgWaaa_nWDIH1_GM/mgh88STlnOM2rqKb1sCj00eacpM"',
    nextPageToken: 'CA8QAA',
    regionCode: 'US',
    pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 15
    },
    items: [
        {
            kind: 'youtube#searchResult',
            etag: '"RmznBCICv9YtgWaaa_nWDIH1_GM/DnkS2C7QrWgr6H1vrpVGnR95aVc"',
            id: {
                kind: 'youtube#video',
                videoId: 'xLvkFer6aOY'
            },
            snippet: {
                publishedAt: '2018-02-16T17:30:15.000Z',
                channelId: 'UCtnSBeKEA0swUnGHQ08SibQ',
                title:
                    'THOR RAGNAROK Short Film - Grandmaster Moves To Earth (2017) Jeff Goldblum Movie HD',
                description:
                    'Thor: Ragnarok Darryl Short - Grandmaster Moves To Earth (2017) Jeff Goldblum Movie HD Subscribe for more official Trailers, TV Spots, Movie Clips, Featurettes and exclusive content!',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/xLvkFer6aOY/default.jpg',
                        width: 120,
                        height: 90
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/xLvkFer6aOY/mqdefault.jpg',
                        width: 320,
                        height: 180
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/xLvkFer6aOY/hqdefault.jpg',
                        width: 480,
                        height: 360
                    }
                },
                channelTitle: 'Comicbook.com',
                liveBroadcastContent: 'none'
            }
        }
    ]
};

function generateSearchResultCard(index, thumbnailURL, videoTitle, videoDescription) {
    var card = document.createElement('div');
    var thumbnail = document.createElement('img');
    var title = document.createElement('div');
    var description = document.createElement('div');

    thumbnail.src = thumbnailURL;

    title.innerText = videoTitle;
    title.className = 'title';
    title.id = index;

    description.innerText = videoDescription;
    description.className = 'description';

    card.className = 'video-result';
    card.append(thumbnail, title, description);

    return card;
}

function searchYoutube(query) {
    // return array of search result
}

function clearHTML() {
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('video-page').innerHTML = '';
}

function addHomePageListeners() {
    var searchResults = document.getElementById('search-results');

    searchResults.addEventListener('click', function(event) {
        var videoIndex = null;

        if (event.target.tagName === 'IMG') {
            videoIndex = event.target.nextElementSibling.id;
        } else if (event.target.className === 'title') {
            videoIndex = event.target.id;
        }

        if (videoIndex) {
            renderVideoPage(videoIndex);
        }
    });
}

function addVideoPageListeners() {
    document.getElementById('home-button')
        .addEventListener('click', function(event) {
            renderHomePage();
        });
}

function renderHomePage() {
    clearHTML();

    document.getElementById('search-bar').style.display = 'block';
    var resultsContainer = document.getElementById('search-results');
    var video = fakeData.items[0];
    var id = video.id.videoId;
    var thumbnail = video.snippet.thumbnails.medium.url;
    var title = video.snippet.title;
    var description = video.snippet.description;

    for (var i = 0; i < 15; i++) {
        var video = generateSearchResultCard(i, thumbnail, title, description);

        resultsContainer.appendChild(video);
    }

    addHomePageListeners();
}

function renderVideoPage(index) {
    clearHTML();

    document.getElementById('search-bar').style.display = 'none';
    var videoPlayer = document.getElementById('video-page');
    var iframe = document.createElement('iframe');
    var homeButton = document.createElement('button');

    iframe.width = 560;
    iframe.height = 315;
    iframe.src = 'http://www.youtube.com/embed/' + fakeData.items[0].id.videoId;

    homeButton.innerText = 'Back to Homepage';
    homeButton.id = 'home-button';

    videoPlayer.append(iframe, homeButton);

    addVideoPageListeners();
}

renderHomePage();
