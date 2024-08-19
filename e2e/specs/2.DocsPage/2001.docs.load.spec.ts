import urls from '../../config/urls';
import test from '../../fixtures/customTest';
import { expect } from '@playwright/test';

const { describe, step } = test;

describe('Docs page', () => {
  test('Test Docs page', async ({
    pageObjectFactory: { homepage, docspage},
    page,
  }) => {
    await step('1. Go to home page', async () => {
      await page.goto(urls.baseUrl);
    });
    await step('2. Click on Docs menu', async () => {
      await homepage.clickDocsMenu();
    });
    await step('3.1. Assertions - "Introduction" is visibled', async () => {
      await expect(await docspage.getIntroductionHeaderLocator()).toBeVisible();
    });
    await step('3.2. Assertions - "Installing Playwright" is visibled', async () => {
      await expect(await docspage.getInstallingPlaywrightHeaderLocator()).toBeVisible();
    });
  });
});
