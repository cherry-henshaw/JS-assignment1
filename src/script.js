let myButton = document.getElementById("myButton");
let myBodyElement = document.getElementById("body");
let popUp = document.getElementById("pop-up");
let indexNumber = 0
myButton.addEventListener("click", myFunction);

function myFunction(){
  const bgColor = ["yellow","green", "orange", "blue", "red", "0"];
   myBodyElement.style.background = bgColor[indexNumber];
   indexNumber++;
   if(indexNumber === bgColor.length) {
    indexNumber = 0
    myBodyElement.style.background = indexNumber[6]
    popUp.style.display = "block"
   


   }
   

}

function closebtn(){
  popUp.style.display = "none"
}

