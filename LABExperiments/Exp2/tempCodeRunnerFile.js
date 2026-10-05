const fs = require('fs');
fs.writeFile('std.txt', 'Name: Rajkumar Rana', (err) => {
if (err) {
console.log(err);
} else {
console.log('File has been created');
fs.appendFile('std.txt', '\nRoll No: 123456', 'utf8', (err) => {
if (err) {
console.log(err);
} else {
console.log('File has been updated');
fs.readFile('std.txt', 'utf8', (err, data) => {
if (err) {
console.log(err);
} else {
console.log('File has been read');
console.log(data);
fs.unlink('std.txt', (err) => {
if (err) {
console.log(err);
} else {
console.log('File has been deleted');
}
});
}
});
}
});
}
});