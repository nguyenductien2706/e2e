import { Page } from '@playwright/test';

const actions = (p: Page) => ({
  extractNumberFromString: async (input: string) => {
    const number = input.replace(/\D/g, '');
    const resultNumb = parseInt(number, 10);
    return resultNumb;
  },
});

export default actions;
