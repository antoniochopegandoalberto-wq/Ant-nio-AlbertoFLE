import fs from 'fs';

const files = fs.readdirSync('.');

for (const file of files) {
  if (file.includes('mp4')) {
    console.log('Found in .: ', file);
  }
}

const pubFiles = fs.readdirSync('./public');
for (const file of pubFiles) {
  if (file.includes('mp4')) {
    console.log('Found in public: ', file);
  }
}

try {
  const imgFiles = fs.readdirSync('./public/images');
  for (const file of imgFiles) {
    if (file.includes('mp4')) {
      console.log('Found in public/images: ', file);
    }
  }
} catch (e) {}

