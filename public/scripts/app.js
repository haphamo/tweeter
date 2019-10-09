/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Implement a createTweetElement function, create first template first

/*
<section class="tweet-container">
            <header><img class="avatar" src="https://i.imgur.com/73hZDYK.png"> <span id="name">Name</span> 
              <span id="handle" >@handle</span>
            </header>
              <p>SOME CONTENT HERE</p>
            <footer class="footer">10 days ago 
              <div id="bottom-right"><i class="fas fa-flag" id="flag"></i><i class="fas fa-retweet" id="retweet"></i><i class="fas fa-heart" id="heart"></i>
              </div>
            </footer>
          </section>
*/


const createTweetElement = function (tweet) {
  
    const markup = `
    <section class="tweet-container">
      <header><img class="avatar" src="https://i.imgur.com/73hZDYK.png">
        <span id="name">${tweetData[user].name}</span> 
        <span id="handle">${tweetData[user].handle}</span>
      </header>
      <p>${tweetData.content}</p>
      <footer class="footer">${tweetData.created_at} 
        <div id="bottom-right"><i class="fas fa-flag" id="flag"></i><i class="fas fa-retweet" id="retweet"></i><i class="fas fa-heart" id="heart"></i>
        </div>
      </footer>
    </section>
    `;
  return markup;
}

document.body.innerHTML = markup;