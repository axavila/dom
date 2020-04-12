// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("click!!!");
// })
//variable
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//function
function inputlength(){
    return input.value.length;
}

function createlist(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

}

function addlistclick(){
    if (inputlength() > 0){
        createlist();
    }
}

function addlistkeypress(event){
    if (inputlength() > 0 && event.which === 13){
        createlist(); 
    }
}

//event
button.addEventListener("click", addlistclick);

input.addEventListener("keypress", addlistkeypress);

 