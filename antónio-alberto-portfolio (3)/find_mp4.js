const fs = require('fs');

const files = fs.readdirSync('.');
console.log("Files in . :", files);

for (const file of files) {
  if (file.includes('mp4')) {
    console.log('Found:', file);
  }
}
