import fs from 'fs';

function wrap() {
  const files = fs.readdirSync('/public');
  console.log('/public:', files);
}
try { wrap(); } catch (e) { console.log(e.message); }

function wrap2() {
  const files2 = fs.readdirSync('/');
  console.log('/:', files2);
}
try { wrap2(); } catch (e) { console.log(e.message); }
