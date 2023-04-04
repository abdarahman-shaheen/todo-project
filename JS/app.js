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
let welcome = confirm("if you wants to skip the welcoming message.")
if (welcome == false) {
  alert(`Welcome ${msr} ${person}  `)
}
else{
  let wel = confirm('The welcome message without the title')
if (wel == true) {
  alert(``);
}
}







