console.log("Javascript is connected!")





// randomly picks a number from 1 to 3 and stores it in the opponentPick variable
function programHand()// determines what item(rock paper or scissors) each value(0,1,2) will hold by the program
{
    const opponentPick = Math.floor(Math.random() * 3) + 1;
    console.log(opponentPick)

    if (opponentPick === 1) // if it picks 1 that will be rock
    {
        console.log("Program picks rock");
        document.getElementById("opponentsResult").textContent = "The Program Picks Rock";
    }
    else if (opponentPick === 2) // 2 will be paper
    {
        console.log("Program picks paper");
        document.getElementById("opponentsResult").textContent = "The Program Picks Paper";
    }
    else if (opponentPick === 3) // 3 will be scissors
    {
        console.log("Program picks scissors");
        document.getElementById("opponentsResult").textContent = "The Program Picks Scissors";
    }
    if (opponentPick === 1 && playerResult === 1 || opponentPick === 2 && playerResult === 2 || opponentPick === 3 && playerResult === 3)
    {
        console.log("draw")
        document.getElementById("totalResult").textContent = "Its a Draw!"
    }
    if (opponentPick === 1 && playerResult === 3 || opponentPick === 2 && playerResult === 1 || opponentPick === 3 && playerResult === 2)
    {
        console.log("You lose!")
        document.getElementById("totalResult").textContent = "You Lost!"
    }
    if (opponentPick === 3 && playerResult === 1 || opponentPick === 1 && playerResult === 2 || opponentPick === 2 && playerResult === 3)
    {
        console.log("You Win!")
        document.getElementById("totalResult").textContent = "You're the Winner!"
    }
}

    




 var playerScissors = document.getElementById("scissors");
 var playerPaper = document.getElementById("paper");
 var playerRock = document.getElementById("rock");
 var totalResult = document.getElementById("totalResult");
 var playerResult;

playerRock.addEventListener("click", () => {
    console.log("Player picks rock"),
    document.getElementById("playersResult").textContent = "Player picks Rock"
    playerResult = 1
    programHand()
})

playerPaper.addEventListener("click",() => {
    console.log("Player picks paper"),
    document.getElementById("playersResult").textContent = "Player picks Paper"
    playerResult = 2
    programHand()
})

playerScissors.addEventListener("click",() => { // user clicks on scissors
    console.log("Player picks Scissors"),       // inputs into the console
    document.getElementById("playersResult").textContent = "Player picks Scissors"
    playerResult = 3
    programHand()    
})

// i still need to add the win/lose mechanic, but i cbf so its future michaels issue


