import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './playwright/tests',
    webServer: {
        command: 'npm run dev',
        port: 3000,
    },
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
    },
});