const itemImput = document.getElementById("item-input");

const onKeyPress = (e) => {
  console.log("Key Was Pressed");
};

const onKeyUp = (e) => {
  console.log("Key Up!");
};

const onKeyDown = (e) => {
  //   console.log("Key Down!");

  // key
  console.log(e.key);
  if (e.key === "Enter") {
    alert("You pressed enter!");
  }

  // keyCode
  console.log(e.keyCode);
  if (e.code === "Digit1") {
    alert("You pressed 1!");
  }

  // code
  console.log(e.code);

  if (e.repeat) {
    console.log(`You are holding down ${e.key}`);
  }

  console.log(`Shift: ${e.shiftKey}`);
  console.log(`Ctrl: ${e.ctrlKey}`);
  console.log(`Ctrl: ${e.altKey}`);
};

itemImput.addEventListener("keypress", onKeyPress);
itemImput.addEventListener("keyup", onKeyUp);
itemImput.addEventListener("keydown", onKeyDown);
