console.log("Javascript is connected!")





// randomly picks a number from 1 to 3 and stores it in the opponentPick variable
function programHand()// determines what item(rock paper or scissors) each value(0,1,2) will hold by the program
{
    let opponentPick = Math.floor(Math.random() * 3) + 1;
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
}



 let playerScissors = document.getElementById("scissors");
 let playerPaper = document.getElementById("paper");
 let playerRock = document.getElementById("rock");
 let totalResult = document.getElementById("totalResult");

playerRock.addEventListener("click", () => {
    console.log("Player picks rock"),
    document.getElementById("playersResult").textContent = "Player picks Rock"
    programHand()
})

playerPaper.addEventListener("click",() => {
    console.log("Player picks paper"),
    document.getElementById("playersResult").textContent = "Player picks Paper"
    programHand()
})

playerScissors.addEventListener("click",() => { // user clicks on scissors
    console.log("Player picks Scissors"),       // inputs into the console
    document.getElementById("playersResult").textContent = "Player picks Scissors"
    programHand()    
})

// i still need to add the win/lose mechanic, but i cbf so its future michaels issue



