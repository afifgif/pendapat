/**
 * Script to check if Figma MCP server is accessible
 * Run with: node src/assets/checkFigmaServer.js
 */

const http = require('http');

const FIGMA_BASE_URL = 'http://localhost:3845/assets';

const testAssets = [
  'imgBrandLogo',
  'img',
  'img1',
  'imgFrame',
  '34edbf5612faad46e941a89614ba1ef4c462d552.png',
  'c71a2c1dc20c2a33d71e8cfd564835e75cd8f844.png',
];

console.log('Testing Figma MCP server connection...\n');

testAssets.forEach((asset, index) => {
  const url = `${FIGMA_BASE_URL}/${asset}`;
  const req = http.get(url, (res) => {
    console.log(`✓ ${asset}: ${res.statusCode === 200 ? 'OK' : `Error ${res.statusCode}`}`);
    if (index === testAssets.length - 1) {
      console.log('\nIf all assets return errors, the Figma MCP server is not running.');
      console.log('Please ensure:');
      console.log('1. Figma desktop app is running');
      console.log('2. The design file is open in Figma');
      console.log('3. MCP server is configured and running on port 3845');
    }
  });
  
  req.on('error', (err) => {
    console.log(`✗ ${asset}: Connection failed - ${err.message}`);
  });
  
  req.setTimeout(2000, () => {
    req.destroy();
    console.log(`✗ ${asset}: Timeout`);
  });
});



