((window) => {
  var speakWord = "Hello";
  helloSpeaker = {}

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;
})(window);
var speakWord = "Hello";
