import renderHomePage from './homepage.js';

const clearHTML = () => {
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('video-page').innerHTML = '';
};

export default clearHTML;
