import { TEST_TIMEOUT } from '../config/local.config';
import pageObjectFactory from '../pageObjects/pageObjectFactory';
import { Page, test as base, TestInfo } from '@playwright/test';

export type CustomTest = {
  page: Page;
  pageObjectFactory: ReturnType<typeof pageObjectFactory>;
};

const customTest = base.extend<CustomTest>({
  pageObjectFactory: async ({ page }, use: any, testInfo: TestInfo) => {
    page.setDefaultTimeout(TEST_TIMEOUT);
    await use(pageObjectFactory(page, testInfo.project.name));
  },
});

export default customTest;
