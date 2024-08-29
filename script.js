let user=0;
let computer=0;


const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara= document.querySelector("#user");
const computerScorePara= document.querySelector("#computer");



const genComputerChoice = () => {
    const options = ["rock" , "paper", "scissors"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];

};


const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin,userChoice, computerChoice) => {
    if(userWin) {
        user++;
        userScorePara.innerText = user;
        msg.innerText = `You Win!. ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        computer++;
        computerScorePara.innerText = computer;
        msg.innerText = `You Lose. ${computerChoice} beats  your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }

}



const playGame=(userChoice) => {
    console.log("user choice = ", userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice = ",computerChoice);



    if (userChoice === computerChoice) {
        drawGame();
    }else {
        let userWin=true;
        if(userChoice==="rock") {
            userWin = computerChoice==="paper" ? false : true;
        } else if(userChoice==="paper"){
            userWin = computerChoice==="scissors" ? false :true;
        } else {
            userWin = computerChoice === "rock"? false : true ;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

         
    });
});