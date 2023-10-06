const body = document.querySelector("body");
const insertDiv = document.querySelector("#insert");

const onKeyDown = (e) => {
  insertDiv.innerHTML = `
    <div id="key" class="key">
    ${e.key}
    <small>e.key</small>
  </div>

  <div id="keycode" class="key">
    ${e.keyCode}
    <small>e.keyCode</small>
  </div>

  <div id="code" class="key">
    ${e.code}
    <small>event.code</small>
  </div>
    `;
};

body.addEventListener("keydown", onKeyDown);
