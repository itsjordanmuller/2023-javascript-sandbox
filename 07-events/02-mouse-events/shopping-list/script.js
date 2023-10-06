const logo = document.querySelector("img");

const onClick = () => console.log("click event");

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "black";
  }
};

const onRightClick = () => {
  alert("Right Click Event!");
};

const onMouseDown = () => {
  console.log("Mouse Down");
};

const onMouseUp = () => {
  console.log("Mouse Up");
};

const onMouseWheel = () => {
  console.log("Weeee!");
};

const onMouseOver = () => {
  console.log("Over!");
};

const onMouseOut = () => {
  console.log("& Out!");
};

const onDragStart = () => {
  console.log("Start!");
};

const onDrag = () => {
  console.log("Draaaag!");
};

const onDragEnd = () => {
  console.log("End!");
};

// Event Listeners
// Left Click
logo.addEventListener("click", onClick);
// Double Left Click
logo.addEventListener("dblclick", onDoubleClick);
// Right Click
logo.addEventListener("contextmenu", onRightClick);
// Mouse Down
logo.addEventListener("mousedown", onMouseDown);
// Mouse Up
logo.addEventListener("mouseup", onMouseUp);
// Mouse Wheel
logo.addEventListener("wheel", onMouseWheel);
// Mouse Over
logo.addEventListener("mouseover", onMouseOver);
// Mouse Out
logo.addEventListener("mouseout", onMouseOut);
// Drag Start
logo.addEventListener("dragstart", onDragStart);
// During Drag
logo.addEventListener("drag", onDrag);
// Drag End
logo.addEventListener("dragend", onDragEnd);
