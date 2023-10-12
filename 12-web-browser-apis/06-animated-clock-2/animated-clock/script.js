const faceColor = document.getElementById("face-color");
const borderColor = document.getElementById("border-color");
const hourLinesColor = document.getElementById("hour-line-color");
const minuteLinesColor = document.getElementById("minute-line-color");
const hourHandColor = document.getElementById("hour-hand-color");
const minuteHandColor = document.getElementById("minute-hand-color");
const secondHandColor = document.getElementById("second-hand-color");
const accentCapColor = document.getElementById("accent-cap-color");

function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Setup Canvas
  ctx.save();

  ctx.clearRect(0, 0, 500, 500); // Clear Entire Canvas Area
  ctx.translate(250, 250); // Center the (0, 0) Origin of the Canvas
  ctx.rotate(-Math.PI / 2); // Rotate clock -90deg

  // Set Default Styles

  ctx.strokeStyle = "#000000";
  ctx.fillStyle = faceColor.value;
  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  // Draw Clock Face/Border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = borderColor.value;
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // Draw Hour Lines
  ctx.save();
  ctx.lineWidth = 4;
  ctx.strokeStyle = hourLinesColor.value;
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6); // Double The Divisor for 12 Lines
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Draw Minute Lines
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = minuteLinesColor.value;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(110, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30); // Double The Divisor for 12 Lines
  }
  ctx.restore();

  // Get Current Time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  //   console.log(`${hr}:${min}:${sec}`);

  // Draw Hour Hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = hourHandColor.value;
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // Draw Minute Hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.strokeStyle = minuteHandColor.value;
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Draw Second Hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.strokeStyle = secondHandColor.value;
  ctx.fillStyle = secondHandColor.value;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = accentCapColor.value;
  ctx.fillStyle = accentCapColor.value;
  ctx.arc(0, 0, 5, 0, Math.PI * 2, true); // Draw Center Circle to Connect All Hands
  ctx.fill();
  ctx.restore();

  ctx.restore(); // Restore Default State

  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);
