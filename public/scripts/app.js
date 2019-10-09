/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Implement a createTweetElement function, create first template first

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

const renderTweets = function(tweetData) {//function to loop over tweetData to create the tweetMarkup, stores all into a string and append once
  let tweets = "";
  for (tweet of tweetData) {
    tweets += createTweetElement(tweet);
  } 
  $('.container').append(tweets);
}

$(function() {
  const $form = $('#postTweet')
  $form.submit(function(e) {
    e.preventDefault();
    //console.log($(this).serialize())
    $.ajax('/tweets', {method: 'POST', data: $(this).serialize()})

    });
});

$(document).ready(function() {
  const loadtweets = async () => {
    try {
      const response = await $.ajax ({ url : '/tweets' , type: "GET", dataType: 'JSON'});
      renderTweets(response);
    } catch (error) {
    console.log(error);
    }
  }
loadtweets();
});
    
