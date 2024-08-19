import { Locator, Page } from '@playwright/test';

const DocsPage = (page: Page, platform: string) => {

  const elements = {
    headerIntroduction: 'id=introduction',
    headerInstallingPlaywright: 'id=introduction',
    
  };

  async function getIntroductionHeaderLocator(): Promise<Locator> {
    return page.locator(elements.headerIntroduction);
  }

  async function getInstallingPlaywrightHeaderLocator(): Promise<Locator> {
    return page.locator(elements.headerInstallingPlaywright);
  }

  return {
    elements,
    getIntroductionHeaderLocator,
    getInstallingPlaywrightHeaderLocator,
  };
};

export default DocsPage;
