import {
  isHeadless,
  WORKERS,
  TRACE,
  REPORTER,
  VIDEO,
  SLOMO,
  OUTPUT_DIR,
} from './config/local.config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: `${__dirname}/specs`,
  outputDir: OUTPUT_DIR,
  reporter: REPORTER,
  workers: WORKERS,
  timeout: 360 * 1000,
  expect: {
    timeout: 30 * 1000,
  },
  reportSlowTests: { max: 0, threshold: 60 * 10000 },

  use: {
    actionTimeout: 10 * 1000,
    navigationTimeout: 40 * 1000,
    headless: isHeadless,
    ignoreHTTPSErrors: true,
    launchOptions: {
      slowMo: SLOMO,
    },
    video: VIDEO,
    trace: TRACE,
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'desktopChrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'mobileIOS',
      use: {
        ...devices['iPhone 13 Pro Max'],
      },
    },
    {
      name: 'mobileAndroid',
      use: {
        ...devices['Pixel 5'],
      },
    },
  ],
});
