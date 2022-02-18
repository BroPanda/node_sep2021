// const { EventEmitter } = require(`events`);
//
// const ee = new EventEmitter();
//
// // =====================================
// // events
//
// ee.on(`Log`, (name) => {
//     console.log(`ee log ${name}`);
// });
//
// ee.emit(`Log`, `some name`);
// ee.emit(`Log`, `some name`);
// ee.emit(`Log`, `some name`);
//
// // =====================================
// // разовий виклик events
//
// ee.once(`Test`, (name) => {
//     console.log(`ee log ${name}`);
// });
//
// ee.emit(`Test`, `some name once`);
// ee.emit(`Test`, `some name once`);
// ee.emit(`Test`, `some name once`);
//
// // =====================================
// // Повертає масив існуючих (not Once!) events
// // Якщо once не був викликаний він попаде в eventNames
//
// console.log(ee.eventNames())
//
// // =====================================
// //


// =====================================
// stream

const fs = require(`fs`);
const path = require(`path`);

//
// // readStream for read big files by parts
const readSteamTest = fs.createReadStream(path.join(__dirname, `test.txt`));
//
// readSteamTest.on(`data`, (chunk => {
//     console.log(chunk, `log chunk`);
// }));

// // writeStream for write big files by parts
//
const writeStream = fs.createWriteStream(path.join(__dirname, `test2.txt`));
//
// writeStream.write(`someData`, error => {
//     if (error) throw error;
// });
//
// writeStream.end();


// // PIPE fast read and write to file
// readSteamTest.pipe(writeStream)









