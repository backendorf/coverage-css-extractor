const { test, expect } = require('@playwright/test');
const path = require('path');

test('Import with empty file selection does not crash and does nothing', async ({ page }) => {
  // Use absolute path for the file protocol
  const filePath = path.resolve(__dirname, '../BACKENDORF-CC.html');
  await page.goto(`file://${filePath}`);

  // The file input should have no files selected initially
  const fileInput = page.locator('#selectFiles');
  await expect(fileInput).toHaveValue('');

  // Wait a bit to ensure everything is loaded, just in case
  await page.waitForTimeout(500);

  // Set up a console listener to catch any errors
  let consoleErrorCount = 0;
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrorCount++;
    }
  });

  page.on('pageerror', exception => {
    consoleErrorCount++;
  });

  // Click the import button
  await page.locator('#import').click();

  // The result textarea should still be empty
  const resultArea = page.locator('#result');
  await expect(resultArea).toHaveValue('');

  // No errors should be logged
  expect(consoleErrorCount).toBe(0);
});
