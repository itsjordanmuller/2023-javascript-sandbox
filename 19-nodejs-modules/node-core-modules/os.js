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

// cpus()
// Returns Information About All CPU Cores, Including:
// Model, Speed, and Times Object with Various Times
console.log(os.cpus());

// freemem()
// Amount of Free Memory on the System
console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem()
// Amount of Total Memory on the System
console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir
// Get User's Home Directory
console.log(os.homedir());
