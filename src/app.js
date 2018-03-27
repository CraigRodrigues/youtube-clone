import { searchYoutube } from './utils.js';
import { renderHomePage } from './homepage.js';

searchYoutube().then((videos) => renderHomePage(videos));
