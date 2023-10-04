const colorObj = {
  color1: "red",
  color2: "orange",
  color3: "yellow",
  color4: "green",
};

// Get Keys & Values in an Object Using a For In Loop
for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ["red", "orange", "yellow", "green"];

// Get Keys in an Array Using a For In Loop
for (const key in colorArr) {
  console.log(colorArr[key]);
}
