
playGame();

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

function getHumanChoice()
{

    const buttons = document.querySelector(".player-selection");

    buttons.addEventListener("click", function (event)
    {
        let btn = event.target;
        console.log(btn.innerText);
        return btn.value;
    })


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

function playGame()
{

    let humanScore = 0;
    let computerScore = 0;
    let roundCounter = 1;

    while (humanScore != 5 || computerScore != 5) //first to 5
    {

        // alert(`ROUND ${counter}`)

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        while ((humanSelection == computerSelection)) //tie
        {
            alert("TIE, REDRAWING");

            humanSelection = getHumanChoice();
            computerSelection = getComputerChoice();

        }


        if (playRound(humanSelection, computerSelection) == true) //human won
        {
            alert("You win! " + humanSelection + " beats " + computerSelection);
            humanScore++;
        }
        else //human lost
        {
            alert("You lose! " + computerSelection + " beats " + humanSelection);
            computerScore++;
        }

        console.log("Current human score: " + humanScore + "\nCurrent Computer Score: " + computerScore);
        console.log("-----------------------------------")

        roundCounter++;

    }


    if (humanScore > computerScore)
    {
        alert("HUMAN WINS!");
    }
    else if (computerScore > humanScore)
    {
        alert("COMPUTER WINS!");
    }


    alert("GAME ENDED :(")
}