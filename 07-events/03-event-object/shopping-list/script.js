const logo = document.querySelector("img");

function onClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  //   e.target.style.backgroundColor = "black";
}

function onDrag(e) {
  document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}

// Event Object Will Show in Console
// logo.addEventListener("click", function (e) {
//   console.log(e);
// });
logo.addEventListener("click", onClick);
logo.addEventListener("drag", onDrag);

document.body.addEventListener("click", function (e) {
  //   console.log(e.target);
  //   console.log(e.currentTarget);
  console.log(e.type);
  console.log(e.timeStamp);
  console.log("clientX", e.clientX);
  console.log("clientY", e.clientY);
  console.log("offsetX", e.offsetX);
  console.log("offsetY", e.offsetY);
  console.log("pageX", e.pageX);
  console.log("pageY", e.pageY);
  console.log("screenX", e.screenX);
  console.log("screenY", e.screenY);
});

document.querySelector("a").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link Broke!");
});

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
