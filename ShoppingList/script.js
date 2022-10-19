var button = document.getElementById("button");
var input = document.getElementById("input");
var ol = document.querySelector("ol");



function inputlength(){
    return input.value.length;
}

function createlistElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ol.appendChild(li);
    input.value = "";
}

function addElementafterclick(){
    if(inputlength() > 0){
        createlistElement();
    }
}

function addElementafterkeypress(event){
    if(inputlength() > 0 && event.keyCode === 13){
        createlistElement();
    }
}

button.addEventListener("click" , addElementafterclick);

input.addEventListener("keypress" , addElementafterkeypress);

