import { Page } from '@playwright/test';

const SearchPage = (page: Page, platform: string) => {

  const elements = {
    textboxSearch: 'id=docsearch-input',
    resultSearch: '//*[contains(@id,"docsearch-item")]',
  };

  async function inputKeyword(keyWord: string): Promise<void> {
    await page.waitForSelector(elements.textboxSearch);
    await page.locator(elements.textboxSearch).fill(keyWord);
  }

  async function getAllResultSearch(): Promise<string[]> {
    const results: string[] = [];
    const listElements = await page.$$(elements.resultSearch);
    await Promise.all(
      listElements.map(async (element) => {
        const text = await element.innerText();
        results.push(text);
      }),
    );
    return results;
  }

  async function getInvalidResultSearch(keyWord: string): Promise<string[]> {
    const results = await getAllResultSearch();
    const invalidValues = await Promise.all(
      results.filter((value) => !String(value.toUpperCase()).includes(keyWord.toUpperCase())),
    );
    return invalidValues;
  }

  return {
    elements,
    inputKeyword,
    getInvalidResultSearch,
  };
};

export default SearchPage;
