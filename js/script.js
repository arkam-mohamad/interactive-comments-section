import data from './data.json' assert {type: 'json'};

let main = document.querySelector('main');
let currentUser = data.currentUser;
let comments = data.comments;


let text = comments.map(comment => (
  `
  <div class="comment-container">
    <div class="main-comment comment-box">
      <div class="votes">
        <img src="./images/icon-plus.svg" alt="icon-plus" class="plus">
        <h1 class="vote-count">${comment.score}</h1>
        <img src="./images/icon-minus.svg" alt="icon-minus" class="minus">
      </div>
      <div class="content">
        <div class="content-top">
          <div class="user">
            <img src="${comment.user.image.png}" alt="${comment.user.username}" class="avatar">
            <h2>${comment.user.username}</h2>
            <p>${comment.createdAt}</p>
          </div>
          <div class="action">
            <p class="reply"><img src="./images/icon-reply.svg" alt="icon-reply"> Reply</p>
          </div>
        </div>
        <p class="text">${comment.content}</p>
      </div>
    </div>
    ${comment.replies.map(reply => (
      `
      <div class="reply-container">
        <div class="reply-comment comment-box">
          <div class="votes">
            <img src="./images/icon-plus.svg" alt="icon-plus" class="plus">
            <h1 class="vote-count">${reply.score}</h1>
            <img src="./images/icon-minus.svg" alt="icon-minus" class="minus">
          </div>
          <div class="content">
            <div class="content-top">
              <div class="user">
                <img src="${reply.user.image.png}" alt="${reply.user.username}" class="avatar">
                <h2>${reply.user.username}</h2>
                <h3 class="you">${reply.user.username == currentUser.username ? "you" : ""}</h3>
                <p>${reply.createdAt}</p>
              </div>
              <div class="action">
                ${reply.user.username == currentUser.username ? '<p class="delete"><img src="./images/icon-delete.svg" alt="icon-delete"> Delete</p>' : ""}
                <p class="reply"><img src="./images/icon-reply.svg" alt="icon-reply"> Reply</p>
              </div>
            </div>
            <p class="text"><span class="to">${reply.replyingTo}</span> ${reply.content}</p>
          </div>
        </div>
      </div>
      `
      ))}
  </div>
  `
));

text += 
`
  <div class="input-comment comment-box">
    <img src="${currentUser.image.png}" alt="${currentUser.username}" class="user-avatar">
    <textarea cols="100" rows="3" placeholder="Add a comment" id="text"></textarea>
    <button class="send">SEND</button>
  </div>
`;

main.innerHTML = text;

