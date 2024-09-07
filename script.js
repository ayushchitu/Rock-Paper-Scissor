let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice= () => {
  let options = ["rock","paper","scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const showResult = (userWin,userChoice,compChoice) => {
  if(userWin) {
    userScore++;
    userScorepara.innerText= userScore;
    console.log("YOU WIN!");
    msg.innerText=`You Win!. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText= compScore;
    console.log("YOU LOSE");
    msg.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const drawGame = () => {
  console.log("Game was drawn");
  msg.innerText="Game was Drawn. Play Again!"
  msg.style.backgroundColor = "#081b31";
}

const playGame = (userChoice) => {
  // user choice 
  console.log("user choice= " , userChoice);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log("Computer choice= " , compChoice);

  if(userChoice === compChoice)
  {
    // draw Game
    drawGame();
  } else {
    let userWin=true;
    if(userChoice === "rock") {
      // scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = compChoice === "scissors"?false:true;
    } else {
      // rock , paper
      userWin = compChoice === "rock"? false : true;
    }
    showResult(userWin,userChoice,compChoice);
  }

  
};

choices.forEach((choice) => {
  choice.addEventListener("click" , () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
}); 
