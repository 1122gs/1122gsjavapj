/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function shuffle(a, b) {
  return Math.floor(Math.random() * (a - b) + b);
}
function random(word) {
  let max = word.length;
  let min = 0;
  let random = shuffle(max, min);
  return word[random];
}
window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    random(who) +
    " " +
    random(action) +
    " " +
    random(what) +
    " " +
    random(when);
};
