//!-------------------------Selectors------------------------------

var userInput = document.getElementById("input");
var button = document.getElementById("btn");
var output = document.getElementById("output");
var bgMusic = document.getElementById("waka_music");
var transMusic = document.getElementById("waka_music2");

//^----------------------------------------------------------------

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//var url = "https://api.funtranslations.com/translate/ebonics.json";

var getURL = function () {
   return url + "?text=" + userInput.value;
};

var errorHandler = function (err) {
   //function expression
   console.log(`we faced an error: `, err);
   alert(`there was some error!`);
};

var clickHandler = function () {
   //function declaration
   fetch(getURL())
      .then((Response) => Response.json())
      .then((json) => (output.innerText = json.contents.translated))
      .catch(errorHandler);
   transMusic.volume = 0.5;
   transMusic.play();
};

//*---------------------DOM-Manipulation-----------------------------

button.addEventListener("click", clickHandler);
bgMusic.volume = 0.2;
bgMusic.play();
