import fs from 'fs';

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules') continue;
    if (file.includes('Weverton') || file.includes('Laura') || file.includes('Gabriel') || file.includes('aulas')) {
      console.log('Found:', dir + '/' + file);
    }
    const stat = fs.statSync(dir + '/' + file);
    if (stat.isDirectory()) {
      walkDir(dir + '/' + file);
    }
  }
}
walkDir('.');
