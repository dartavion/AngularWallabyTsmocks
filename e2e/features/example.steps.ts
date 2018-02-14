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
    await browser.getCurrentUrl().then((data) => {
        expect(data).to.equal('http://localhost:4200/phone');
        return element(by.css('.phone-input')).sendKeys(phone);
    });
  }
  Then(/^I see the formatted phone number "([^"]*)"$/, thenPhone);
  async function thenPhone(phone): Promise<void> {
    expect(phone).to.equal('585-865-1122');
  }
});
