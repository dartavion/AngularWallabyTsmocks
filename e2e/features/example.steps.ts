import { expect } from '../config/helpers/chai-imports';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';

defineSupportCode(({ Given, Then }) => {
  Given(/^I visit localhost$/, givenVisitHomepage);
  async function givenVisitHomepage(): Promise<void> {
    await browser.get('http://localhost:4200');
  }

  Given(/^I submit the phone number "([^"]*)"$/, givenCount);
  async function givenCount(phone): Promise<void> {
    await browser.get('http://localhost:4200/phone');
    browser.getCurrentUrl().then((data) => {
        expect(data).to.equal('http://localhost:4200/phone');
        return element(by.model('item.value')).sendKeys(phone);
    });
  }
});
