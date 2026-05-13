import fs from 'fs';
import path from 'path';

function findMp4(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === 'node_modules' || item === '.git') continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findMp4(fullPath);
    } else if (item.includes('.mp4') || item.includes('Weverton')) {
      console.log('FOUND MP4:', fullPath);
    }
  }
}

try {
  findMp4('.');
} catch (e) {
  console.error(e);
}
