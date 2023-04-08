'use strict'
let personQuestion = [];
let person;
function welcomeMessage() {
  let msr = "";
  person = prompt("Please enter your name");
  let gender = prompt("please enter your gender");
  if (gender.toUpperCase() == "MALE" || gender == "FEMALE") {
    if (gender.toUpperCase() == "MALE") {
      msr = "Mr"
    }
    else {
      msr = "Ms"
    }
  }

  let age = prompt("please enter your age");
  if (age <= 0) {
    alert("your age is less")
  }


  let confirmWelcomeMessage = confirm("if you wants to skip the welcoming message.")
  if (!confirmWelcomeMessage) {
    alert(`Welcome ${msr} ${person}  `)
  }
}


function question(arr) {
  let answer1 = prompt(`${person} are you married`)
  let answer2 = prompt(`${person} are you play football`)
  let answer3 = prompt(`${person} are you eating Vegetables`)
   arr.push(answer1, answer2, answer3)
}


function checkAnswer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "" || arr[i] == null) {
      arr[i] = "invalid"
    }

  }
}

function printAnswer(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

welcomeMessage();
question(personQuestion);
checkAnswer(personQuestion);
printAnswer(personQuestion);








