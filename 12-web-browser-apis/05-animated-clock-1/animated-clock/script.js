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
  ctx.fillStyle = "#f4f4f4";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  // Draw Clock Face/Border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#800000";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  ctx.restore(); // Restore Default State
}

clock();
