// const fs = require("fs");

// Other Methods to Write to a File

// Callback Version
// fs.writeFile("file1.txt", "Hello World!", (err) => {
//   if (err) throw err;
//   console.log("File Created");
// });

// Promise Version
const { rename } = require("fs");
const fsp = require("fs/promises");

// fsp.writeFile("file2.txt", "Hello World 2!")
//   .then(() => console.log("File Created"))
//   .catch((err) => console.log(err));

// Sync Version
// fs.writeFileSync("file3.txt", "Hello World 3!");
// console.log("File Created!");

// Async/Await
// Write to a File
async function createFile(filename, content) {
  try {
    await fsp.writeFile(filename, content);
    console.log("File Created!");
  } catch (error) {
    console.log(error);
  }
}

// createFile("file4.txt", "Hello World 4!");

// Read from a File
async function readFile(filename) {
  try {
    const data = await fsp.readFile(filename, "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// readFile("file1.txt");
// readFile("file2.txt");
// readFile("file3.txt");
// readFile("file4.txt");

// Delete a File
async function deleteFile(filename) {
  try {
    await fsp.unlink(filename);
    console.log(`File ${filename} deleted`);
  } catch (error) {
    console.log(error);
  }
}

// deleteFile("file4.txt");

// Rename a File
async function renameFile(old_filename, new_filename) {
  try {
    await fsp.rename(old_filename, new_filename);
    console.log(`File ${old_filename} renamed to ${new_filename}`);
  } catch (error) {
    console.log(error);
  }
}

// renameFile("file1.txt", "file.txt");

// Create a Folder
async function createFolder(folderName) {
  try {
    await fsp.mkdir(folderName);
    console.log(`Created directory: ${folderName}`);
  } catch (error) {
    console.log(error);
  }
}

createFolder("fs-files");
