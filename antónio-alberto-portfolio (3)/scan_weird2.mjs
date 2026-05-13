import fs from 'fs';
const items = fs.readdirSync('.');
for(const i of items){
  if(i.includes('\\')) console.log("Has backslash:", i);
}
