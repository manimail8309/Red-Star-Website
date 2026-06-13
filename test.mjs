import fs from 'fs';
import { Jimp } from 'jimp';

async function check() {
  const files = fs.readdirSync('public').filter(f => f.startsWith('duke-'));
  for (const file of files) {
    try {
      const img = await Jimp.read('public/' + file);
      let r = 0, g = 0, b = 0;
      let count = 0;
      img.scan(0, 0, Math.min(img.bitmap.width, 100), Math.min(img.bitmap.height, 100), function(x, y, idx) {
        r += this.bitmap.data[idx + 0];
        g += this.bitmap.data[idx + 1];
        b += this.bitmap.data[idx + 2];
        count++;
      });
      console.log(file, 'avg color:', Math.round(r/count), Math.round(g/count), Math.round(b/count));
    } catch(e) {
      console.log(file, 'error', e.message);
    }
  }
}
check();
