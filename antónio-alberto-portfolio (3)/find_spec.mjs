import fs from 'fs';
const files = fs.readdirSync('./public/images');
for (const file of files) {
  if (file.toLowerCase().includes('mp4') || file.toLowerCase().includes('weverton') || file.toLowerCase().includes('laura')) {
    console.log(file);
  }
}
