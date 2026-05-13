import fs from 'fs';
const items = fs.readdirSync('/');
for(const i of items){
  if(i.includes('public')) console.log("Root file:", i);
}
