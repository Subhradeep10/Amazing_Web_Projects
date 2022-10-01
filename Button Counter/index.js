var click = 0;
var button = document.getElementById("counter")
function clickgenerator() {
    click += 1;
    console.log(click);
    if (click==1) {
        counter.innerHTML = "You clicked the button " + click + " time";
    } 
    
    else {
        counter.innerHTML = "You clicked the button " + click + " times";
    }
    
}
