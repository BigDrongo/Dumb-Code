
function newElement()
{
   var li = document.createElement("li"); // creates a list element in the unordered list which is an empty element
   var inputValue = document.getElementById("input").value; // takes the input value from the element "input" its important to add the .value at the end to actually get the value of the variable
   var text = document.createTextNode(inputValue); // creates a variable called text with the input taken from inputValue
   li.appendChild(text); // creates a child element for the li variable which will be the text var. now the text is connected to the list item.

   if(inputValue == "") // checking if the input text is empty
   {
      alert("Please write something!") // this alert will appear if empty
   }
   else // if its not empty
   {
      document.getElementById("uL").appendChild(li); // this command grabs the element called uL and gives it a list child that was just created
      console.log(inputValue);
   }
}
document.getElementById("input").value = "";

var span = document.createElement("SPAN")
var txt = document.createElement("x");
span.className = "close";
span.appendChild(txt);
li.appendChild("SPAN");

