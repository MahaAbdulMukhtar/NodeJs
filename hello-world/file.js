const fs = require("fs");
const os = require("os");

console.log(os.cpus().length);

// Sync... Blocking...
// fs.writeFileSync('./test.txt', "Hello World");

// Async... Non - Blocking Request
// fs.writeFile("./test.txt", "Hello World Async", (err) => {});

// Blocking...
// console.log(1);
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// console.log(2);


// Non - Blocking...
// console.log(1);
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log('Error', err);
//     }
//     else {
//         console.log(result);
//     }
// });
// console.log(2);

// Default Thread Pool Size = 4
// Max? - 8core cpu - 8

// fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// console.log (fs.statSync("./test.txt"));

// fs.mkdirSync("my-docs");