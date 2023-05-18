const categories = ["Formula 1 Drivers, Capital Cities, Car Brands"];
let word;
let textArr = [];
let text = document.getElementById("text");
const Formula1Drivers = [
  "micheal schumacher",
  "lewis hamilton",
  "ayrton senna",
  "daniel ricciardo",
  "valtteri bottas",
  "max verstappen",
  "fernando alonso",
  "sebastian vettel",
];
const randomElement =
  Formula1Drivers[Math.floor(Math.random() * Formula1Drivers.length)];

word = randomElement;

const startingText = () => {
  for (let i = 0; i < word.length; i++) {
    word[i] != " " ? textArr.push("_") : textArr.push("-");
  }

  text.textContent = textArr.join(" ");
};
startingText();

let row = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

addKeyboard = () => {
  buttons = document.getElementById("keyboardButtons");
  firstRow = document.createElement("div");
  // secondRow = document.createElement("div");
  // thirdRow = document.createElement("div");

  for (let i in row) {
    firstRow.id = "row";
    createButton = document.createElement("button");
    createButton.id = row[i];
    createButton.addEventListener("click", () => game(row[i]));
    createButton.innerHTML = row[i];
    buttons.appendChild(firstRow);
    firstRow.appendChild(createButton);
  }
};
addKeyboard();
text.textContent = textArr.join(" ");

//stickman
canvas = function () {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#fff";
  context.lineWidth = 2;
};

head = function () {
  myStickman = document.getElementById("stickman");
  context = myStickman.getContext("2d");
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
};

draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
};

frame1 = function () {
  draw(0, 150, 350, 150);
};

frame2 = function () {
  draw(0, 0, 20, 600);
};

frame3 = function () {
  draw(0, 11, 100, 7);
};

frame4 = function () {
  draw(60, 5, 60, 15);
};

torso = function () {
  draw(60, 36, 60, 70);
};

rightArm = function () {
  draw(60, 46, 100, 50);
};

leftArm = function () {
  draw(60, 46, 20, 50);
};

rightLeg = function () {
  draw(60, 70, 100, 100);
};

leftLeg = function () {
  draw(60, 70, 20, 100);
};

canvas();

drawArray = [
  rightLeg,
  leftLeg,
  rightArm,
  leftArm,
  torso,
  head,
  frame4,
  frame3,
  frame2,
  frame1,
];

const liveCount = document.getElementById("liveCount");

let lives = 10;
liveCount.textContent = `lives:${lives}`;

const game = (guess) => {
  if (word.includes(guess)) {
    const matches = [...word.matchAll(guess)];
    const indexes = matches.map((match) => match.index);

    indexes.map((index) => (textArr[index] = guess));
    text.textContent = textArr.join(" ");

    return textArr.join("").split("-").join("") === word.replace(/\s/g, "")
      ? (document.querySelector("body").style.backgroundColor = "#60b347")
      : "";
  } else if (lives > 0) {
    lives--;
    drawArray[lives]();
    liveCount.textContent = `lives:${lives}`;
    console.log(`The word does not include letter ${guess}.`);
  } else {
    console.log(`I'm sorry my friend, stickman is dead 🏴‍☠️.`);
    document.querySelector("body").style.backgroundColor =
      "rgba(201, 37, 37, 0.849)";
    console.log(`The word: ${word}`);
  }
};

const reset = document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  context.clearRect(0, 0, 400, 400);
  lives = 10;
  liveCount.textContent = `lives:${lives}`;
  textArr.join(" ").replaceAll(/^[a-z]+$/gi, "_");
  word = Formula1Drivers[Math.floor(Math.random() * Formula1Drivers.length)];
  textArr = [];
  startingText();
  text.textContent = textArr.join(" ");
});
