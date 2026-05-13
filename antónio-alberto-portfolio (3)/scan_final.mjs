import fs from 'fs';
const items = fs.readdirSync('/app/applet');
for(const i of items){
  if(i.includes('Weverton') || i.includes('Laura')) console.log("Found applet:", i);
}
