import sharp from 'sharp';
import fs from 'fs';

async function run() {
  const files = fs.readdirSync('public').filter(f => f.startsWith('duke-'));
  for (const f of files) {
    const stats = await sharp('public/' + f).stats();
    const channels = stats.channels.map(c => c.mean);
    console.log(f, channels);
  }
}
run();
