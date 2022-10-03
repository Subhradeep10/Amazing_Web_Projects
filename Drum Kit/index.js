for (var i=0; i<document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playSound(this.innerHTML);
    clickAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(){
  playSound(event.key);
  clickAnimation(event.key);
});

function playSound(key) {
  switch(key){
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/crash.mp3").play();
      break;

    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "l":
      new Audio("sounds/snare.mp3").play();
      break;

    default: console.log(event.key)
  }
}

function clickAnimation(key) {
  var button = document.querySelector('.' + key);
button.classList.add('pressed');

  setTimeout(function() {
    button.classList.remove('pressed');
  }, 100);
}
