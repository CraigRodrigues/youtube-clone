import { searchYoutube, renderHomePage, videos } from './homepage.js';

searchYoutube().then((videos) => renderHomePage(videos));
