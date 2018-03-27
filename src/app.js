import { searchYoutube } from './utils.js';
import { homepage } from './homepage.js';

searchYoutube().then((videos) => homepage.render(videos));
