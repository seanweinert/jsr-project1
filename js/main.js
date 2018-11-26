const DEFAULT = ["Zaphod Beeblebrox", "Trillian", "Arthur", "Ford"];
var randomDefault = DEFAULT[Math.floor(Math.random() * DEFAULT.length)];

const MARVIN = [
  "Don’t pretend you want to talk to me, I know you hate me.",
  "Wrong.",
  "42.",
  "I'm very depressed.",
  "A towel.",
  " 'Let’s build robots with Genuine People Personalities,’ they said. So they tried it out with me. I’m a personality prototype. You can tell, can’t you?",
  "Don’t pretend you want to talk to me, I know you hate me.",
  "Well, get on with it...",
  "Sounds awful."
];

const RESPONSE = [
  "Wretched, isn’t it?",
  "It’s the people you meet in this chat that really get you down.",
  "This is the sort of thing you life forms enjoy, is it?",
  "I’m not getting you down at all am I?",
  "Does your planet have oceans? I hate oceans.",
  "You think you’ve got problems. What are you supposed to do if you are a manically depressed robot?"
];

var person = prompt("Please enter your name", randomDefault);

if (person != null) {
  document.getElementById("user").innerHTML = "<b>" + person + ":</b>";
  document.getElementById("marvin").innerHTML =
    "<b>Marvin:</b> " + person + ", come to make fun of me again, have you?";
}

function userResponse() {
  var getInput = document.getElementById("userInput").value;
  document.getElementById("user").innerHTML =
    "<b>" + person + ": </b>" + getInput;
  if (getInput.includes("ello" || "ey")) {
    document.getElementById("marvin").innerHTML = "<b>Marvin:</b> " + MARVIN[0];
  } else if (getInput.includes("right?")) {
    document.getElementById("marvin").innerHTML = "<b>Marvin:</b> " + MARVIN[1];
  } else if (getInput.includes("life" && "meaning")) {
    document.getElementById("marvin").innerHTML = "<b>Marvin:</b> " + MARVIN[2];
  } else if (getInput.includes("life")) {
    document.getElementById("marvin").innerHTML = "<b>Marvin:</b> " + MARVIN[3];
  } else if (getInput.includes("bring")) {
    document.getElementById("marvin").innerHTML = "<b>Marvin:</b> " + MARVIN[4];
  } else if (getInput.includes("OK")) {
    document.getElementById("marvin").innerHTML = "<b>Marvin:</b> " + MARVIN[3];
  } else if (getInput.includes("feel")) {
    document.getElementById("marvin").innerHTML = "<b>Marvin:</b> " + MARVIN[6];
  } else if (getInput.includes("No")) {
    document.getElementById("marvin").innerHTML = "<b>Marvin:</b> " + MARVIN[7];
  } else {
    for (i = 0; i < RESPONSE.length; i++)
      document.getElementById("marvin").innerHTML =
        "<b>Marvin:</b> " + RESPONSE[i];
  }
}
