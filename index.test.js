import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Shopping Cart Functionality', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    require('./index.js');
  });
});
