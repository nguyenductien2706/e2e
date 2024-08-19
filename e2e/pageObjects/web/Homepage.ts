import { Locator, Page } from '@playwright/test';
import { promises } from 'dns';

const HomePage = (page: Page, platform: string) => {

  const elements = {
    buttonGetStarted:
      platform === 'desktopChrome'
        ? '//*[contains(@class,"getStarted")]'
        : '//*[contains(@class,"buttons")]/a',
    hamburgerMenu: '//button[@aria-label="Toggle navigation bar"]',
    menuDocs:
      platform === 'desktopChrome'
        ? '//*[@class="navbar__items"]/*[@href="/docs/intro"]'
        : '//*[@class="menu__link" and @href="/docs/intro"]',
    buttonSearch: '//button[contains(@class,"DocSearch-Button")]',

    // GURU99
    linkTestTing: '(//td[@style="text-align:center;"])[1]',
    iconTestTing: '(//div[contains(@class,"box-media-container")])[2]',
    linkHere: '//a[text()="here"]',
    textEmail: '[name="emailid"]',
    buttonSubmit: '[name="btnLogin"]',
    errorEmail: 'id=message9',
    textID: '(//td[@align="center"]//following-sibling::td)[1]',
    textPW: '(//td[@align="center"]//following-sibling::td)[2]',
    textUserID: '[name="uid"]',
    textPassword: '[name="password"]',
    buttonRest: '[name="btnReset"]',
    buttonLogin: '[name="btnLogin"]',

    //add new customer of GURU99
    LinkNewCustomer: '//li//a[contains(text(),"New Customer")]',
    textCustomerName: '[name="name"]',
    checkboxGender: '[value="m"]',
    textDateOfBirth: 'id=dob',
    textAddress: '[name="addr"]',
    textCity: '[name="city"]',
    textState: '[name="state"]',
    textPIN: '[name="pinno"]',
    textMobileNumber: '[name="telephoneno"]',
    textE_mail: '[name="emailid"]',
    textPassword1: '[name="password"]',

    // error message
    errorCustomerName: 'id=message',
    errorDataOfBirth: 'id=message24',
    errorAddress: 'id=message3',
    errorCity: 'id=message4',
    errorState: 'id=message5',
    errorPIN: 'id=message6',
    errorMobileNumber: 'id=message7',
    errorEMail: 'id=message9',
    errorPassword: 'id=message18',
  };

  async function getGetStartedLocator(): Promise<Locator> {
    return page.locator(elements.buttonGetStarted);
  }

  async function clickDocsMenu(): Promise<void> {
    if (platform !== 'desktopChrome') {
      await page.locator(elements.hamburgerMenu).click();
    }
    await page.locator(elements.menuDocs).click();
    await page.waitForLoadState();
  }

  async function getSearchButtonLocator(): Promise<Locator> {
    return page.locator(elements.buttonSearch);
  }

  async function clickSearchButton(): Promise<void> {
    await page.locator(elements.buttonSearch).click();
  }

  async function clickLinkTest(): Promise<void> {
    await page.locator(elements.linkTestTing).click();
  }

  async function clickIconTest(): Promise<void> {
    await page.locator(elements.iconTestTing).click();
  }

  async function clickLinkHere(): Promise<void> {
    await page.locator(elements.linkHere).click();
  };

  async function fillEmail(email: string): Promise<void> {
    await page.locator(elements.textEmail).fill(email);
  };

  async function clickSubmit(): Promise<void> {
    await page.locator(elements.buttonSubmit).click();
  };

  async function getErormessgeEmailLocator(): Promise<Locator> {
    return page.locator(elements.errorEmail);
  }

  async function getIDLocator(): Promise<string> {
    return page.locator(elements.textID).innerText();
  }

  async function getPWLocator(): Promise<string> {
    return page.locator(elements.textPW).innerText();
  }

  async function fillID(id: string): Promise<void> {
    await page.locator(elements.textUserID).fill(id);
  };

  async function fillPassword(password: string): Promise<void> {
    await page.locator(elements.textPassword).fill(password);
  };

  async function clickLogin(): Promise<void> {
    await page.locator(elements.buttonLogin).click();
  }

  async function clickNewCustomer(): Promise<void> {
    await page.locator(elements.LinkNewCustomer).click();
  }

  async function getErrorAddCustomerNameLocator(): Promise<Locator> {
    return page.locator(elements.errorCustomerName);
  };

  async function getErrorDataOfBirthLocator(): Promise<Locator> {
    return page.locator(elements.errorDataOfBirth)
  };

  async function getErrorAddressLocator(): Promise<Locator> {
    return page.locator(elements.errorAddress)
  };

  async function getErrorCityLocator(): Promise<Locator> {
    return page.locator(elements.errorCity)
  };

  async function getErrorStateLocator(): Promise<Locator> {
    return page.locator(elements.errorState)
  };

  async function getErrorPINLocator(): Promise<Locator> {
    return page.locator(elements.errorPIN)
  };

  async function getErrorMobileNumberLocator(): Promise<Locator> {
    return page.locator(elements.errorMobileNumber);
  };

  async function getErrorEMaliLocator(): Promise<Locator> {
    return page.locator(elements.errorEMail)
  };

  async function getErrorPasswordLocator(): Promise<Locator> {
    return page.locator(elements.errorPassword)
  };

  async function fillDataAddCustomer(
    customerName: string,
    dateOfBirth: string,
    address: string,
    city: string,
    state: string,
    pIN: string,
    mobileNumber: string,
    e_mail: string,
    password1: string,
  ): Promise<void> {
    await page.locator(elements.textCustomerName).fill(customerName);
    await page.locator(elements.checkboxGender).click();
    await page.locator(elements.textDateOfBirth).fill(dateOfBirth);
    await page.locator(elements.textAddress).fill(address);
    await page.locator(elements.textCity).fill(city);
    await page.locator(elements.textState).fill(state);
    await page.locator(elements.textPIN).fill(pIN);
    await page.locator(elements.textMobileNumber).fill(mobileNumber);
    await page.locator(elements.textE_mail).fill(e_mail);
    await page.locator(elements.textPassword1).fill(password1);
  };

  return {
    elements,
    getGetStartedLocator,
    clickDocsMenu,
    getSearchButtonLocator,
    clickSearchButton,
    clickLinkTest,
    clickIconTest,
    clickLinkHere,
    fillEmail,
    clickSubmit,
    getErormessgeEmailLocator,
    getPWLocator,
    getIDLocator,
    fillID,
    fillPassword,
    clickLogin,
    clickNewCustomer,
    getErrorAddCustomerNameLocator,
    getErrorDataOfBirthLocator,
    getErrorAddressLocator,
    getErrorCityLocator,
    getErrorStateLocator,
    getErrorPINLocator,
    getErrorMobileNumberLocator,
    getErrorEMaliLocator,
    getErrorPasswordLocator,
    fillDataAddCustomer,
  };
};

export default HomePage;
