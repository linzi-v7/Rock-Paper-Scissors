
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;

updateRoundCounter(++roundCounter);
startGame();

function startGame()
{

    const buttons = document.querySelector(".player-selection");

    buttons.addEventListener("click", function (event)
    {
        let btn = event.target;
        playGame(btn);
    });


}

function getComputerChoice()
{
    //Research Math.Random() and how it works with Math.floor() to get random number from 0 to n-1, n being 3 here
    let choice = Math.floor(Math.random() * 3);

    switch (choice)
    {
        case 0:
            return "Rock";
            break;

        case 1:
            return "Paper";
            break;

        default:
            return "Scissors";
            break;
    }
}


function playRound(humanChoice, computerChoice)
{
    let humanWin = false;

    if (humanChoice == "Rock" && computerChoice == "Scissors")
        humanWin = true;
    else if (humanChoice == "Paper" && computerChoice == "Rock")
        humanWin = true;
    else if (humanChoice == "Scissors" && computerChoice == "Paper")
        humanWin = true;

    return humanWin;
}

function playGame(btn)
{

    const gameEnd = humanScore == 5 || computerScore == 5;
    if (gameEnd)
    {
        return;
    }


    let humanSelection = btn.innerText;
    let computerSelection = getComputerChoice();


    if ((humanSelection == computerSelection)) 
    {
        updateRoundDetails("TIE, choose again");
        updateRoundCounter(++roundCounter)
        return;

    }

    let roundResult = ""

    if (playRound(humanSelection, computerSelection) == true) //human won
    {
        roundResult = "You win! " + humanSelection + " beats " + computerSelection;
        humanScore++;
    }
    else //human lost
    {
        roundResult = "You lose! " + computerSelection + " beats " + humanSelection;
        computerScore++;
    }

    updateRoundDetails(roundResult + "\nCurrent human score: " + humanScore + "\nCurrent Computer Score: " + computerScore);




    //final round
    if (humanScore == 5)
    {
        updateRoundDetails("HUMAN WINS! REFRESH TO TRY AGAIN");
        return;
    }
    else if (computerScore == 5)
    {
        updateRoundDetails("COMPUTER WINS! REFRESH TO TRY AGAIN");
        return;
    }
    else 
    {
        updateRoundCounter(++roundCounter);
    }

}

function updateRoundCounter(roundCounter)
{
    const roundCount = document.querySelector(".round-counter");
    roundCount.innerText = `ROUND ${roundCounter}`;

}


function updateRoundDetails(text)
{
    const roundDetails = document.querySelector(".round-details");
    roundDetails.innerText = text;
}



