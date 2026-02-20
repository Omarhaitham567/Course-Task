var texts = [
  "I want to be an actor because I enjoy acting and speaking in front of people.",
  "Acting helps me be confident and creative.",
  "Actors can become superheroes, kings, explorers, or funny characters!"
];

var colors = ["purple", "green", "orange"];
var index = 0;

function changeText() {
  index = (index + 1) % texts.length;
  var t = document.getElementById("text");
  t.innerHTML = texts[index];
  t.style.color = colors[index];
}