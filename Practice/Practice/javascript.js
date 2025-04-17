
car = 
    {
        keyTurned: false, // the key is turned off by default
        peddlePressed: false, // the peddle is not pressed by default
        isMoving: false, // the car is not moving by default
        gear: "0", // the car is in park gear by default
    }; // creating an object called car

///////////////////////////////////////////START//CAR/////////////////////////////////////////////////////////////////

document.getElementById("submitBtn").onclick = functUserInput = function(keyTurned)
        {
            keyTurned = document.getElementById("userInput").value;
            console.log("received user input"); // getting the value of the userInput input field
        
            if (keyTurned === "yes")
                {
                    car.keyTurned = true;
                    console.log("keyTurned = true"); // log the key is turned on
                    document.getElementById("p1").textContent ="the Engine is turned on.";
                    updateCarStatus(); // call the updateCarStatus function to update the status of the car                 
                
                    p3Hide.style.display = "block"; // show the paragraph
                    p4Hide.style.display = "block"; // show the paragraph
                    p5Hide.style.display = "block"; // show the paragraph
                    p6Hide.style.display = "block"; // show the paragraph
                    p7Hide.style.display = "block"; // show the paragraph
                    parkGear.style.display = "block"; // show the paragraph
                    driveGear.style.display = "block"; // show the paragraph
                    driveBtn.style.display = "block"; // show the paragraph
                    stopBtn.style.display = "block"; // show the paragraph
                    p9Hide.style.display = "block"; // show the paragraph
                    h2Hide.style.display = "block"; // show the paragraph

                }
                else if (keyTurned !== "yes") // is user writes anything else
                {
                    car.keyTurned = false;
                    console.log("keyTurned = false"); // log the key is turned off
                    document.getElementById("p2").textContent = "the Engine isnt turned on.";
                    updateCarStatus(); // call the updateCarStatus function to update the status of the car
                   
                    p3Hide.style.display = "none"; // hide the paragraph
                    p4Hide.style.display = "none"; // hide the paragraph
                    p5Hide.style.display = "none"; // hide the paragraph
                    p6Hide.style.display = "none"; // hide the paragraph
                    p7Hide.style.display = "none"; // hide the paragraph             
                    parkGear.style.display = "none"; // hide the paragraph
                    driveGear.style.display = "none"; // hide the paragraph
                    driveBtn.style.display = "none"; // hide the paragraph
                    stopBtn.style.display = "none"; // hide the paragraph
                    p9Hide.style.display = "none"; // hide the paragraph
                    h2Hide.style.display = "none"; // hide the paragraph

                }
        
        };

//////////////////////////////////////////GEARS/////////////////////////////////////////////////////////////////////

document.getElementById("parkGear").onclick =  function() // function to change the gear of the car
    {
            car.gear = "0";
            document.getElementById("p5Hide").textContent = "the car is in PARK gear.";
            console.log("car is in park gear"); // log the gear of the car
            updateCarStatus(); // call the updateCarStatus function to update the status of the car
    };   

document.getElementById("driveGear").onclick =  function()
    {               
            car.gear = "1";
            document.getElementById("p5Hide").textContent = "the car is in DRIVE gear.";
            console.log("car is in drive gear"); // log the gear of the car
            updateCarStatus(); // call the updateCarStatus function to update the status of the car
    };

//////////////////////////////////////////PEDDLES/////////////////////////////////////////////////////////////////////

 
        document.getElementById("driveBtn").onclick = function() // function to press the peddle of the car
        {
            car.peddlePressed = true;
            console.log("peddlePressed = true"); // log the peddle is pressed
            document.getElementById("p7Hide").textContent = "the DRIVING peddle is pressed.";
            updateCarStatus(); // call the updateCarStatus function to update the status of the car
        }

        document.getElementById("stopBtn").onclick = function() // function to release the peddle of the car
        {
            car.peddlePressed = false;
            console.log("peddlePressed = false"); // log the peddle is released
            document.getElementById("p7Hide").textContent = "the BRAKE peddle is pressed.";
            updateCarStatus(); // call the updateCarStatus function to update the status of the car
        }
    

////////////////////////////////////////////MOVING/DRIVE////////////////////////////////////////////////////////////////
updateCarStatus = function() // function to update the status of the car
    {
        if (car.keyTurned === true && car.peddlePressed === true && car.gear === "1") // if the key is turned on and the peddle is pressed and the gear is in drive then the car will move
        {
            car.isMoving = true;
            console.log("Car is Driving");
            document.getElementById("h2Hide").textContent = "The car is moving.";
        }
        else if (car.keyTurned === false || car.peddlePressed === false || car.gear === "0") // if either the key is turned off or the peddle is not pressed then the car will not move
        { 
            car.isMoving = false;
            console.log("Car is not Driving");
            document.getElementById("h2Hide").textContent = "The car is not moving.";
        }
    };
    // call the updateCarStatus function every second to update the status of the car