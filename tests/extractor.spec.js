const { test, expect } = require('@playwright/test');
const path = require('path');

test('skips non-CSS files during extraction', async ({ page }) => {
  const filePath = `file://${path.resolve(__dirname, '../BACKENDORF-CC.html')}`;
  await page.goto(filePath);

  const mixedData = [
    {
      "url": "https://example.com/style.css",
      "text": "body { color: red; } h1 { color: blue; }",
      "ranges": [
        {"start": 0, "end": 20}
      ]
    },
    {
      "url": "https://example.com/script.js",
      "text": "console.log('hello');",
      "ranges": [
        {"start": 0, "end": 21}
      ]
    }
  ];

  await page.locator('#result').fill(JSON.stringify(mixedData));
  await page.locator('#convert').click();

  const criticalOutput = await page.locator('#critical').inputValue();

  expect(criticalOutput).toContain('body { color: red; }');
  expect(criticalOutput).not.toContain("console.log('hello');");
});
