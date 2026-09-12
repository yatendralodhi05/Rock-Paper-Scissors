let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


const genCompChoice = () =>{
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "game was draw. play again!";
}

const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        userScore++;
        userScorePara.innerText = `${userScore}`;
             msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    }
    else{
         compScore++;
         compScorePara.innerText = `${compScore}`;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        userwin = true;

        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === 'paper'){
            userwin = compChoice === "rock" ? true : false;
        }
        else{
            userwin = compChoice == "rock" ? false: true;
        }

        showWinner(userwin,userChoice,compChoice);
    }
     

}

choices.forEach(choice => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})