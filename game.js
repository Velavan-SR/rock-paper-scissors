const userImg = document.getElementById("user-hand");
const pcImg = document.getElementById("pc-hand");
const options = document.querySelector(".options");
const user_score = document.querySelector(".user-score");
const pc_score = document.querySelector(".pc-score");
const replay = document.querySelector(".replay");
const pc_options = ["rock", "paper", "scissors"];

let userScore = 0;
let pcScore = 0;
let content='';

document.querySelectorAll(".options > img").forEach((op) => {
  op.addEventListener("click", () => mainFunc(op.alt));
});

function mainFunc(op) {
  userImg.src = `assets/${op}-hand.png`;
  const pcHand = pc_options[Math.floor(Math.random() * 3)];
  pcHandGen(pcHand);
  compare(op, pcHand);
}

function pcHandGen(hand) {
  pcImg.src = `assets/${hand}-hand.png`;
}

function compare(userHand, pcHand) {
  if (
    (userHand === "rock" && pcHand === "scissors") ||
    (userHand === "paper" && pcHand === "rock") ||
    (userHand === "scissors" && pcHand === "paper")
  ) {
    user_score.textContent = ++userScore;
  } else if (userHand !== pcHand) {
    pc_score.textContent = ++pcScore;
  }
  check(user_score.textContent, pc_score.textContent);
}

function check(user, pc) {
  if (user === "5" && user>pc ) {
    options.style.visibility = "hidden";
    content=`<h3> You Won ! </h3>
    <div class='play-again'>Play Again</div>`
    replay.innerHTML+=content;
    replay.style.visibility = "visible";
    document.querySelector(".play-again").addEventListener('click',() => {
      window.location.reload();
    })
  }
  else if ( pc=== '5' && pc>user){
    options.style.visibility = "hidden";
    content=`<h3> You Lost :( </h3>
    <div class='play-again'>Play Again</div>`
    replay.innerHTML+=content;
    replay.style.visibility = "visible";
    document.querySelector(".play-again").addEventListener('click',() => {
      window.location.reload();
    })
  }
}
