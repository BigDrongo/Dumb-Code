
car = 
    {
        keyTurned: false, // the key is turned off by default
        peddlePressed: false, // the peddle is not pressed by default
        isMoving: false, // the car is not moving by default
    }; // creating an object called car

var userInput2 = document.getElementById("userInput2");// getting the input field with id userInput2
let hasClicked = false; // variable to check if the button has been clicked

document.getElementById("submitBtn2").addEventListener("click", function()
    {
        hasClicked = true; // set the variable to true when the button is clicked
    })

document.getElementById("submitBtn").onclick = functUserInput = function(keyTurned)
        {
            keyTurned = document.getElementById("userInput").value;
            console.log("received user input"); // getting the value of the userInput input field
        
            if (keyTurned === "yes")
                {
                    car.keyTurned = true;
                    document.getElementById("p1").textContent ="the Key is turned on.";
                    
                    userInput2.style.display = "block"; // show the input field
                    submitBtn2.style.display = "block"; // show the submit button
                    p3Hide.style.display = "block";
                 }
                else if (keyTurned !== "yes") // is user writes anything else
                {
                    car.keyTurned = false;
                    document.getElementById("p2").textContent = "the Key isnt turned.";

                    userInput2.style.display = "none"; // hide the input field
                    submitBtn2.style.display = "none"; // hide the submit button
                    p3Hide.style.display = "none"; // hide the paragraph
                }
        
        }




car.start = function(keyTurned, peddlePressed, isMoving) // function to start the car
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