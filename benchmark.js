const urls = [];
for (let i = 0; i < 10000; i++) {
  urls.push('https://example.com/assets/style' + i + '.css');
  urls.push('https://example.com/assets/script' + i + '.js');
}

console.time('split');
for (let j = 0; j < 100; j++) {
  for (let i = 0; i < urls.length; i++) {
    urls[i].split('.').pop() === 'css';
  }
}
console.timeEnd('split');

console.time('endsWith');
for (let j = 0; j < 100; j++) {
  for (let i = 0; i < urls.length; i++) {
    urls[i].endsWith('.css');
  }
}
console.timeEnd('endsWith');
