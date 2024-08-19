import urls from '../../config/urls';
import test from '../../fixtures/customTest';

import { expect } from '@playwright/test';

const { describe, step } = test;

describe('Home page', () => {

  test('Search function at Home page', async ({
    pageObjectFactory: { homepage, searchpage},
    page,
  }) => {
    await step('1. Go to home page', async () => {
      await page.goto(urls.baseUrl);
    });
    await step('2. Assertions - Search button is visibled', async () => {
      await expect(await homepage.getSearchButtonLocator()).toBeVisible();
    });
    // await step('3. Search keyword', async () => {
    //   await homepage.clickSearchButton();
    //   await searchpage.inputKeyword(keyWord);
    // });
    // await step(`4. Assertions - All results contains ${keyWord}`, async () => {
    //   const invalidResults = await searchpage.getInvalidResultSearch(keyWord);
    //   expect(invalidResults.length).toEqual(0);
    // });
  });
});
