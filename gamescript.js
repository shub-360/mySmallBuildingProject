let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

// number generated code
const genCompChoice =() =>{
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}
// draw condition
const drawGame = () => {
    console.log("draw");
    msg.innerHTML = "Draw";
}   

// user win condition
const showWinner =(userWin , userChoice ,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log("user win");
        msg.innerHTML = `You Win! your${userChoice} beats Bot${compChoice}`;
    }
    else{
        compScore++;
        compScorePara.innerHTML = compScore;
        console.log("comp win");
        msg.innerHTML = `You Lose! Bot's ${compChoice} beats Your ${userChoice}`; // Corrected message
    }
}

// main game decision
const playGames = (userChoice) => {
    console.log("user choice = ",userChoice);
    // computer generated choice rock paper scissors
    const compChoice = genCompChoice();
    console.log("Bot choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
        return; // Add return statement to prevent further execution
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGames(userChoice);
    });
});
