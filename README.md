# Youtube Clone Homework

### Description
For this homework you will finally be working with "live" data from an actual API - Youtube!

The current website in this repo is not fully functional and does not use live data. You will need to fix that so it works just like if you were searching on www.youtube.com!

### Instructions
1. Go to the [YouTube Data API documentation and get an API key](https://developers.google.com/youtube/registering_an_application#Create_API_Keys)
1. Read on their docs about how to [search for videos](https://developers.google.com/youtube/v3/docs/)
1. Use [Postman](https://www.getpostman.com/) to test your API key and queries before you begin coding. **Be sure that you can actually get data in Postman first!**
1. Read over the code in this repo and see how it works with the fake data provided
1. Add comments to the code explaining how every part works to show that you know what is going on
1. Copy and paste the below into a `config.js` file in your folder. Make sure it is ignored by git and loaded into your page correctly!

```javascript
// your youtube API key will live here
// make sure this file is in your .gitignore file so it is not commited to GitHub for someone to steal!
// read about .gitignore files here: https://help.github.com/articles/ignoring-files/

window.API_KEY = 'your api key goes here';
```

1. Make the search input works when you hit `ENTER` (get rid of the fake data!). You will need to load jQuery into the page to use `$.ajax` for requests (or try using the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) with promises)
1. Make sure you handle any error cases! What happens if your internet goes down or Youtube is broken?
1. Show the top 15 results on the homepage for the search query passed in
1. Clicking on a video should show the "Video Page" with correct video and autoplay it. Look at how the `renderVideoPage` function works. How will you be able to pass the `index` of the correct video into it?
1. The Video Page should also show the correct title, channel name and description
1. Ignore any iframe embed error by Google. It is a bug in Chrome. “Error parsing header X-XSS-Protection”
1. Make the logo and home button clickable and when clicked they should return the user to the homepage
1. When returning to the homepage, the app should show the previous search results
1. Make it so the search automatically happens as a user types, so they no longer need to hit enter. Research how to limit/throttle the number of AJAX calls to youtube so you don’t go over the API call rate limit and get blocked! You may want to write that functionality yourself, or import a library/function that can do it for you.
1. **BONUS:** Show some kind of indicator that a search is working/loading with a spinner or “Loading…”
1. **BONUS:** Add a button that will show the current trending (mostPopular) videos for the United States
1. **HARDCORE:** Refactor the code for the homepage and videopage navigation to make use of HTML5's `history.pushState`, and no longer use the index in the `renderVideoPage` function and instead make us of the `pageState` object. Come up with your own url naming convention