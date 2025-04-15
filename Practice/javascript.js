
car = {
    keyTurned: false, // the key is turned off by default
    peddlePressed: false, // the peddle is not pressed by default
    isMoving: false, // the car is not moving by default
}; // creating an object called car


 

document.getElementById("submitBtn").onclick = functUserInput = function(keyTurned)
        {
            keyTurned = document.getElementById("userInput").value;
            console.log("received user input"); // getting the value of the userInput input field
        
            if (keyTurned === "yes")
                {
                    car.keyTurned = true;
                    document.getElementById("p1").textContent ="the Key is turned on.";
                 }
                else if (keyTurned !== "yes") // is user writes anything else
                {
                    car.keyTurned = false;
                    document.getElementById("p2").textContent = "the Key isnt turned.";
                }
        
            }



car.start = function(keyTurned, peddlePressed, isMoving)
    {
        
        
        if (keyTurned === "yes")
        {
            car.keyTurned = true;
            document.getElementById("p1").textContent ="the Key is turned on.";
        }
        else if (keyTurned !== "yes") // is user writes anything else
        {
            car.keyTurned = false;
            document.getElementById("p2").textContent = "the Key isnt turned.";
        }
        

        if (car.keyTurned === true && car.peddlePressed === true) // if both the key is turned and the peddle is pressed then the car will move
        {
            car.isMoving = true;
            console.log("Car is moving");
        }

    } 