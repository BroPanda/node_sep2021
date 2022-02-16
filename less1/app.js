// const fs = require(`fs`);
// const path = require("path");

// fs.writeFileSync(path.join(__dirname, `test`, `file.txt`), `some data`)

// fs.writeFile(path.join(__dirname, `test`, `file.txt`), `some data2`, (err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }));
//
// fs.readFile(path.join(__dirname, `test`, `file.txt`),`utf8`, ((err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data);
// }))

// fs.appendFile(path.join(__dirname, `test`, `file.txt`), `\nnewData`, err => {
//     if (err) {
//         console.log(err);
//         throw err;
//
//     }
// })

// fs.truncate(path.join(__dirname, `test`, `file.txt`), err => {
//     if (err) {
//         console.log(err);
//         throw err;
//
//     }
// })

// fs.mkdir(path.join(__dirname, `public`, `test`), {recursive: true}, err => {
//         if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.rmdir(path.join(__dirname, `public`), err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.readdir(path.join(__dirname, `test`), (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data);
// })

// fs.rename(path.join(__dirname, `test`, `file.txt`), path.join(__dirname, `test`, `file1.txt`), (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data);
// })

// fs.rename(path.join(__dirname, `test`, `file1.txt`), path.join(__dirname, `test`, `dir`, `file2.txt`), (err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data);
// })