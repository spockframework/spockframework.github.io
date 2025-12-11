import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    reporter: process.env.CI ? [['github'], ['html']] : [['html'], ['list']],
    // Configure projects for major browsers.
    projects: [
        {
            name: 'chromium',
            use: devices['Desktop Chrome'],
        },
        {
            name: 'firefox',
            use: devices['Desktop Firefox'],
        },
    ],
    // Single template for all assertions
    testDir: 'tests',
    timeout: 30000, // 30 seconds
    snapshotPathTemplate: '{testDir}/__screenshots__{/projectName}/{testFilePath}/{arg}{ext}',
    // Run local dev server before starting the tests.
    use: {
        // Base URL to use in actions like `await page.goto('/')`.
        baseURL: 'http://localhost:5173',

        // Collect trace when retrying the failed test.
        trace: 'on-first-retry',
    },
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173',
        reuseExistingServer: !process.env.CI,
    },
});
