let humanScore = 0;
let computerScore = 0;

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

    let tryAgain = true;

    do
    {
        let choice = prompt("Choose between: Rock, Paper and Scissors. Type (R,P,S) for faster choice if you like.")

        //choice = choice.toLowerCase();
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
        else
        {
            tryAgain = true;
            console.log("INVALID INPUT");
        }
    } while (tryAgain == true)

}

function playRound(humanChoice, computerChoice)
{
    let humanWin = false;
    let computerWin = false;

    if (humanChoice == "Rock")
    {
        switch (computerChoice)
        {
            case "Paper":
                computerWin = true;
                break;
            case "Scissors":
                humanWin = true;
                break;
        }
    }

    if (humanChoice == "Paper")
    {
        switch (computerChoice)
        {
            case "Rock":
                humanWin = true;
                break;
            case "Scissors":
                computerWin = true;
                break;
        }
    }

    if (humanChoice == "Scissors")
    {
        switch (computerChoice)
        {
            case "Paper":
                humanWin = true;
                break;
            case "Rock":
                computerWin = true;
                break;
        }
    }


    if (humanWin)
    {
        humanScore++;
        alert("You win! " + humanChoice + " beats " + computerChoice);
    }
    else if (computerWin)
    {
        computerScore++;
        alert("You lose! " + computerChoice + " beats " + humanChoice);

    }
    else
    {
        alert("TIE! " + humanChoice + " ties with computer choice  " + computerChoice)
    }

    console.log("Current human score: " + humanScore + "\nCurrent Computer Score: " + computerScore);
}

function playGame()
{

    for (let index = 0; index < 5; index++) 
    {
        alert(`ROUND ${index + 1}`)

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log("-----------------------------------")

        if (index < 4)
            alert("Start next round?")
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