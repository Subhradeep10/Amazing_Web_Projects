var click = 0;
var button = document.getElementById("counter")
function clickgenerator() {
    click += 1;
    console.log(click);
    counter.innerHTML = "You clicked the button " + click + " time";
}
