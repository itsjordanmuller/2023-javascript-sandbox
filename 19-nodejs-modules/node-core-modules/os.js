const os = require("os");

// arch()
// Returns String Identifying Computers CPU Architecture
console.log(os.arch());

// platform()
// Returns String Identifying Computer Platform
// Windows = win32, Mac = darwin, linux = linux
console.log(os.platform());

if (os.platform() === "darwin") {
  console.log("You are on a Mac system.");
} else if (os.platform() === "win32") {
  console.log("You are on a Windows system.");
} else if (os.platform() === "linux") {
  console.log("You are on a Linux system.");
} else {
  console.log("You are on some other type of system.");
}
