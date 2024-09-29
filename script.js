console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice()
{
    //Research Math.Random() and how it works with Math.floor() to get random number from 0 to n-1, n being 3 here
    let choice = Math.floor(Math.random() * 3);  

    switch (choice) {
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
    let choice = prompt("Choose between: Rock, Paper and Scissors. Type (R,P,S) for faster choice if you like.")

    choice = choice.toLowerCase();
    let rock        =  (choice == "r" || choice == "rock");
    let paper       =  (choice == "p" || choice == "paper");
    let scissors    =  (choice == "s" || choice == "scissors");

    if(rock)
    {
        return "Rock";
    }
    else if(paper) 
    {
        return "Paper";
    }
    else if(scissors)
    {
        return "Scissors";
    }
    else
    {
        console.log("INVALID CHOICE! REFRESH")
    }
    
}