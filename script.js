
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
    let choice = prompt("Choose between: Rock, Paper and Scissors. Type (R,P,S) for faster choice if you like.");

    choice = choice.toLowerCase();
    let rock = (choice == "r" || choice == "rock");
    let paper = (choice == "p" || choice == "paper");
    let scissors = (choice == "s" || choice == "scissors");


    if (rock)
    {
        return "Rock";
    }
    else if (paper)
    {
        return "Paper";
    }
    else if (scissors)
    {
        return "Scissors";
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

function playGame()
{

    let humanScore = 0;
    let computerScore = 0;

    for (let index = 0; index < 5; index++) 
    {
        alert(`ROUND ${index + 1}`)

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        while ((humanSelection == computerSelection) || (humanSelection === undefined)) //tie or invalid choice
        {
            if (humanSelection === undefined)
            {
                alert("INVALID CHOICE, PLEASE TRY AGAIN!");
            }
            else if (humanSelection == computerSelection)
            {
                alert("TIE, REDRAWING");
            }

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

    }


    if (humanScore > computerScore)
    {
        alert("HUMAN WINS!");
    }
    else if (computerScore > humanScore)
    {
        alert("COMPUTER WINS!");
    }
    else
    {
        alert("TIE :( REFRESH AND TRY AGAIN.");
    }
}