var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("What do peole call you?");
console.log("Hey! " + userName + "!   Let's see how much do you know me.. But!! Pehle ye batao ki__");

var userFriendship = readlineSync.question("Hum dono kitne saal se friends hai..Batao Bhai.__");
var userTime = readlineSync.question("Rate our friendship out of 5..__");

console.log("kya baat hh " +  userFriendship + "saal aur " + userTime + "out of 5 jitni dosti.!!  Chalo ab kuch questions k answers batao..Let's begin!!!");


function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    score = score + 1;
    console.log("You are right!")
  }else{
    score = score;
    console.log("You are wrong!")
  }
}

play("What is my nick name?","Sacchu");
play("What is my favourite colour?","Green");
play("What is my strongest subject?","Maths");
play("Who is my favourite hero?","Govinda");
play("What is my village name?","Bahripur");
play("Which is my favourite festival?","Diwali");
play("What is my favourite sport?","Cricket");
play("What is my favourite costume?","Lower");
play("Who is my best friend?","Aman");
play("Who is my favourite marvel hero?","Thor");

console.log("You scored " + score + "/10  ");
