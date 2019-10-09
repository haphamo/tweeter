/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Implement a createTweetElement function, create first template first
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Ha",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@haphamo" },
    "content": {
      "text": "Hello LightHouseLabs"
    },
    "created_at": 736874876838
  }
]
const createTweetElement = function (tweetData) {
    const tweetMarkup = `
    <section class="tweet-container">
      <header><img class="avatar" src="${tweetData.user.avatars}">
        <span id="name">${tweetData.user.name}</span> 
        <span id="handle">${tweetData.user.handle}</span>
      </header>
      <p>${tweetData.content.text}</p>
      <footer class="footer">${new Date(tweetData.created_at)} 
        <div id="bottom-right"><i class="fas fa-flag" id="flag"></i><i class="fas fa-retweet" id="retweet"></i><i class="fas fa-heart" id="heart"></i>
        </div>
      </footer>
    </section>
    `;
  return tweetMarkup;
}

const renderTweets = function(tweetData) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  let tweets = "";
  for (tweet of tweetData) {
    tweets += createTweetElement(tweet);
  } 
  $('.container').append(tweets);
}


$(document).ready(function() {
  // const tweet = createTweetElement(tweetData);
  // console.log(tweet); // to see what it looks like
  // $('.container').append(tweet);
  renderTweets(tweetData);

});
    
    