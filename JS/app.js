'use strict'

let person = prompt("Please enter your name");
let msr="";
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
let welcomeMessage = confirm("if you wants to skip the welcoming message.")
if (welcomeMessage == false) {
  alert(`Welcome ${msr} ${person}  `)
}
else{
  let welcomeMessage = confirm('The welcome message without the title')
if (welcomeMessage == true) {
  alert(``);
}
}

let marriage = prompt(`${person} are you married`)
if(marriage==""){
  marriage="invalid"
}

let playFootball = prompt(`${person} are you play football`)
if(playFootball==""){
  playFootball="invalid"
}
let eatVegetables = prompt(`${person} are you eating Vegetables`)
if(eatVegetables==""){
  eatVegetables="invalid"
}

let personQuestion = [marriage,playFootball,eatVegetables]

for (let i = 0; i < personQuestion.length; i++) {
  console.log(personQuestion[i]);
}







