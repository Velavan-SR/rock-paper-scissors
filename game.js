const user = document.querySelector(".user");
const userImg = document.getElementById("user-hand");
const pcImg = document.getElementById("pc-hand");
const options = document.querySelector(".options");
const user_score = document.querySelector(".user-score");
const pc_score = document.querySelector(".pc-score");
const replay = document.querySelector(".replay");
const hand_options = ["rock", "paper", "scissors"];

let userScore = 0;
let pcScore = 0;

document.querySelectorAll(".options > img").forEach((op) => {
  op.addEventListener("click", () => mainFunc(op.alt));
});

function mainFunc(op) {
  userImg.src = `assets/${op}-hand.png`;
  const pcHand = hand_options[Math.floor(Math.random() * 3)];
  pcHandGen(pcHand);
  compare(op, pcHand);
}

// Generating random hand image for AI
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
  if (user === "5" || pc === "5") {
    options.style.visibility = "hidden";
    replay.style.visibility = "visible";
  }
}

document.querySelector(".play-again").onclick = () => {
  window.location.reload()
};