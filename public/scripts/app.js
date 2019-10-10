/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Implement a createTweetElement function, create first template first

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


const createTweetElement = function (tweetData) {
  
    const tweetMarkup = `
    
    <section class="tweet-container">
      <header><img class="avatar" src="${tweetData.user.avatars}">
        <span id="name">${tweetData.user.name}</span> 
        <span id="handle">${tweetData.user.handle}</span>
      </header>
      <p>${escape(tweetData.content.text)}</p>
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
  //container that holds all tweets. use .empty method
  for (tweet of tweetData) {
    $('#special').empty();
    tweets += createTweetElement(tweet);
    
    $('#special').append(tweets);
  } 
}


$(document).ready(function() {
  $(function() {
    const $form = $('#postTweet')
    $form.submit(function(e) {
      e.preventDefault();
      //add form validation before sending ajax and rendering
      let validation = $('textarea').val().trim().length;
      if (validation === 0) {
        alert('Please enter something to tweet!')
      } else if (validation > 140) {
        alert('You wrote over the maximum!');
        return;
      }
      $.ajax('/tweets', {method: 'POST', data: $(this).serialize()})
      .then (() => {//refreshes
        loadtweets(); 
      })
      });
  });

  const loadtweets = async () => {
    try {
      //do something here 
      const response = await $.ajax ({ url : '/tweets' , type: "GET", dataType: 'JSON' });
      renderTweets(response);
    } 
    catch (error) {
    console.log(error);
    }
  }
loadtweets();
});
    


