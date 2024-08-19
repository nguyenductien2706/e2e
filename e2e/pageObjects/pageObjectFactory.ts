import HomePage from './web/Homepage';
import DocsPage from './web/Docspage';
import SearchPage from './web/Searchpage';
import { Page } from '@playwright/test';

export default (page: Page, platform: string) => ({
  homepage: HomePage(page, platform),
  docspage: DocsPage(page, platform),
  searchpage: SearchPage(page, platform),
});
