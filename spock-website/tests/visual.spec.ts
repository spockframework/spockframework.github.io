import { test, expect } from '@playwright/test';

test('visual snapshot', async ({ page }) => {
    await page.goto('/?disableaos');
    await expect(page).toHaveScreenshot('index.png', { fullPage: true });
});
