
(()=> {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(i in names) {
    saySomething(names[i])
  };
}
)();

// This way the code would be maybe more useful
function saySomething (name) {
  name.charAt(0).toLowerCase().includes("j") ? byeSpeaker.speak(name) : helloSpeaker.speak(name);
};

  /* This is how the course wants the solution, i think there's a better way now */

  // for (let i = 0; i < names.length; i++) {
  //   if (names[i].charAt(0).toLowerCase().includes("j")) {
  //     byeSpeaker.speak(names[i])
  //   } else {
  //     helloSpeaker.speak(names[i])
  //   }
  // };