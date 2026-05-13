import fs from 'fs';

function walkDir(dir, list) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules') continue;
    if (file === '.git') continue;
    const path = dir + '/' + file;
    list.push(path);
    if (fs.statSync(path).isDirectory()) {
      walkDir(path, list);
    }
  }
}
const list = [];
walkDir('.', list);
fs.writeFileSync('all_files.txt', list.join('\n'));
