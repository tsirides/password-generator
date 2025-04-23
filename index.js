const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
let lengthEl = document.getElementById("pass-length-label");

function setValue() {
  let value = document.getElementById("pass-length").value;
  lengthEl.textContent = "Password Length: " + value;
  return value;
}

function randomIndex() {
  let index = Math.floor(Math.random() * characters.length);
  return index;
}

function passwordGenerator() {
  let generatedPassword = "";
  for (let i = 0; i < setValue(); i++) {
    generatedPassword += characters[randomIndex()];
  }

  return generatedPassword;
}

function generatePassword() {
  password1El.textContent = passwordGenerator();
  password2El.textContent = passwordGenerator();
}
function copyText(el) {
  let copyTextEl = document.getElementById(el);
  if (copyTextEl.textContent.length > 0) {
    navigator.clipboard.writeText(copyTextEl.textContent);
  } else {
    alert("Please Generate a password First!");
  }
}
