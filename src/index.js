import { searchYoutube } from './utils.js';
import { homepage } from './homepage.js';
import './main.css';

searchYoutube().then((videos) => homepage.render(videos));
