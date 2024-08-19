import urls from '../../config/urls';
import test from '../../fixtures/customTest';
import { expect } from '@playwright/test';

const { describe, step } = test;

describe('Home page', () => {
  test('Test homepage', async ({
    pageObjectFactory: { homepage},
    page,
  }) => {
    await step('1. Go to home page', async () => {
      await page.goto(urls.baseUrl);
      expect(page.url()).toContain("playwright.dev");
    });
    await step('2. Assertions - GET STARTED button is visibled', async () => {
     await expect(await homepage.getGetStartedLocator()).toBeVisible();
    });
  });
});
