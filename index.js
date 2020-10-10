var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.id;

    // var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {

    case "h":
        var kick = new Audio('HBSong1.mp3');
        kick.play();
        break;

    case "a":
      var tom1 = new Audio("HBSong2.mp3");
      tom1.play();
      break;

    case "b":
      var tom2 = new Audio("HBSong3.mp3");
      tom2.play();
      break;

    case "c":
      var tom3 = new Audio('Thalaiva.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('Sports.mp3');
      tom4.play();
      break;

    case "e":
      var snare = new Audio('Pellikala.mp3');
      snare.play();
      break;

    case "f":
      var crash = new Audio('Don1.mp3');
      crash.play();
      break;

    case "g":
      var kick = new Audio('Don2.mp3');
      kick.play();
      break;



    case "i":
          var kick = new Audio('Yeh Dosti.mp3');
          kick.play();
          break;

    case "j":
            var kick = new Audio('ShankarDada.mp3');
            kick.play();
            break;

    case "k":
              var kick = new Audio('Superman.mp3');
              kick.play();
              break;

    case "l":
                var kick = new Audio('PanBanaras.mp3');
                kick.play();
                break;
    case "m":
                var kick = new Audio('ChiruVeenaStep.mp3');
                kick.play();
                break;
    case "n":
                var kick = new Audio('MustafaMustafa.mp3');
                kick.play();
                break;

    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 17000);

}
