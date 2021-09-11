//query selectors
var messageButton = document.querySelector(".receive-message");
var image = document.querySelector("img");
var messageBox = document.querySelector("p");
var affRadio = document.getElementById("affirmation");
var mantraRadio = document.getElementById("mantra");
var submitButton = document.querySelector("#submit");
var userName = document.querySelector("#name");
var greeting = document.querySelector("h2");
var loginForm = document.querySelector("#login");
var mainPage = document.querySelector("main");
var clearButton = document.querySelector("#clear");

// event listeners
messageButton.addEventListener("click", showMessage);
submitButton.addEventListener("click", showMain);
clearButton.addEventListener("click", clearMessage);



// functions
function showMain() {
  event.preventDefault();
  if (!userName.value) {
    window.alert("What should we call you?");
  } else {
    hideLogin();
    greeting.innerText = `Welcome, ${userName.value}! Are you ready for some inner peace?`;
  };
};


function showMessage() {
  displayText();
  if (affRadio.checked) {
    var randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
      messageBox.innerText = randomAffirmation;
  }  else if (mantraRadio.checked) {
    var randomMantra = mantras[Math.floor(Math.random() * mantras.length)];
        messageBox.innerText = randomMantra;
    } else {
      messageBox.innerText = "Please choose a message type!";
    };
};


function hideLogin() {
  mainPage.classList.remove("hidden");
  loginForm.classList.add("hidden");
};

function displayText() {
  image.classList.add("hidden");
  messageBox.classList.remove("hidden");
  clearButton.classList.remove("hidden");
};

function clearMessage() {
  messageBox.classList.add("hidden");
  clearButton.classList.add("hidden");
  image.classList.remove("hidden");
};


//messages

var affirmations = [
  "forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];
