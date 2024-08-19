import urls from '../../config/urls';
import test from '../../fixtures/customTest';
import { expect } from '@playwright/test';
import {
  dataNhapLieu,
  randomData
} from '../../config/app.data';


const { describe, step } = test;


describe.only('Login shoppe', () => {
  test('Test Docs page', async ({
    pageObjectFactory: { homepage },
    page,
  }) => {
    await step('1. Go to home page', async () => {
      await page.goto(urls.baseUrl);
    });
    await step('2. fill data Email', async () => {
      await homepage.fillEmail(dataNhapLieu.VALID_EMAIL);
      await homepage.clickSubmit();
    });
    await step('3. Get ID and PW', async () => {
      const ID = await homepage.getIDLocator();
      const PW = await homepage.getPWLocator();
      await page.goto('https://demo.guru99.com/v4/');
      await homepage.fillID(ID);
      await homepage.fillPassword(PW);
      await homepage.clickLogin();
    });
    await step('4. Fill data add new customer', async () => {
      await step('4.1. Check error masage of add new customer', async () => {
        await homepage.clickNewCustomer();
        await homepage.fillDataAddCustomer('', '', '', '', '', '', '', '', '');
        await expect(await homepage.getErrorAddCustomerNameLocator()).toBeVisible();
        await expect(await homepage.getErrorDataOfBirthLocator()).toBeVisible();
        await expect(await homepage.getErrorAddressLocator()).toBeVisible();
        await expect(await homepage.getErrorCityLocator()).toBeVisible();
        await expect(await homepage.getErrorStateLocator()).toBeVisible();
        await expect(await homepage.getErrorPINLocator()).toBeVisible();
        await expect(await homepage.getErrorMobileNumberLocator()).toBeVisible();
        await expect(await homepage.getErrorEMaliLocator()).toBeVisible();
        await expect(await homepage.getErrorPasswordLocator()).toBeVisible();
      });
      await step('4.2. Fill data add new customer', async () => {
        await homepage.fillDataAddCustomer(
          randomData.RAMDOM_DATA_NAME,
          dataNhapLieu.DATE,
          randomData.RAMDOM_DATA_NAME,
          randomData.RAMDOM_DATA_NAME,
          dataNhapLieu.DATE,
          dataNhapLieu.DATE,
          dataNhapLieu.DATE,
          dataNhapLieu.VALID_EMAIL,
          randomData.RAMDOM_DATA_NAME,
        );
      });
    });
  });
});