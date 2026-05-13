import fs from 'fs';

function safeReadDir(d) {
    try {
        return fs.readdirSync(d);
    } catch(e) {
        return [];
    }
}
console.log('Root:', safeReadDir('/'));
console.log('Workspace parent:', safeReadDir('..'));
