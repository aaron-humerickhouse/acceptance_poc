import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  test.setTimeout(5000)
  await page.goto('http://0.0.0.0:8080/src/layered_testing.html');
  await page.click('#button')
  const text = await page.innerText('#clicked')
  expect(text).toEqual('Button was successfully clicked')
  await page.close();
});
