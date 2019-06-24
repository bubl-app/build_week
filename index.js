const bubble = document.querySelectorAll(".circle");
function MouseOver() {
  //this.style.width: 50%;
  //height = "374%";
  //alert("click");
  //this.color = "red";
}
for (var i = 0; i < bubble.length; i++) {
  bubble[i].addEventListener("mouseover", MouseOver);
}

//mouseover navigation turns blue and font is bigger
const navLinks = document.getElementsByTagName("a");
function clickHandler() {
  this.style.color = "aqua";
}

function MouseO() {
  this.style.color = "white";
}

function TextSize() {
  this.style.fontSize = "2em";
}

function ChangeText() {
  this.style.fontSize = "1.5em";
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseover", clickHandler);
  const eventHandler3 = event => {
    event.preventDefault();
  };
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseout", MouseO);
  const eventHandler3 = event => {
    event.preventDefault();
  };
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseover", TextSize);
  const eventHandler3 = event => {
    event.preventDefault();
  };
}

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseout", ChangeText);
  const eventHandler3 = event => {
    event.preventDefault();
  };
}
