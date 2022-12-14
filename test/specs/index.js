const mainPage = require("../pages/main.page");
const aboutCompanyPage = require("../pages/aboutCompany.page");
const catalogPage = require("../pages/catalog.page");
const resources = require("../resources/data.js");
const { expect, assert } = require("chai");

describe("Onliner.by test example", () => {
  before(async () => {
    await browser.maximizeWindow();
  });

  it("Should open main page", async () => {
    await mainPage.openPage();
    expect(await browser.getTitle()).to.equal("Onliner");
  });

  it("Main page should contain correct header info", async () => {
    const actualValue = await mainPage.getHeaderMenuText();
    assert.sameMembers(resources.headerExpectedValue, actualValue);
  });

  it("Main page should contain correct footer info", async () => {
    const actualValue = await mainPage.getFooterMenuText();
    assert.sameMembers(resources.footerExpectedValue, actualValue);
  });

  it("Should open About Company page", async () => {
    await aboutCompanyPage.getButton("О компании").scrollIntoView();
    await aboutCompanyPage.getButton("О компании").click();
    expect(await browser.getTitle()).to.equal("О сайте");
    expect(
      await aboutCompanyPage.getCommonPageTitle("О сайте").isDisplayed()
    ).to.equal(true);
  });

  it("About Company page should contain contact info", async () => {
    await aboutCompanyPage.phoneNumbers.scrollIntoView();
    expect(await aboutCompanyPage.phoneNumbers.isDisplayed()).to.equal(true);
    expect(await aboutCompanyPage.emailAddress.isDisplayed()).to.equal(true);
  });

  it("Should open youtube channel of onliner.by", async () => {
    await aboutCompanyPage.youtubeButton.scrollIntoView();
    await aboutCompanyPage.youtubeButton.click();
    expect(await browser.getTitle()).to.equal("Onliner - YouTube");
  });

  it("Should open new tab of onliner.by", async () => {
    await browser.createWindow("tab");
    await browser.switchWindow("about:blank");
    await browser.url("https://www.onliner.by/");
    expect(await browser.getTitle()).to.equal("Onliner");
  });

  it("Should open Catalog page", async () => {
    await mainPage.catalogMenuButton.waitForDisplayed();
    await mainPage.catalogMenuButton.click();
    await catalogPage.catalogPageTitle.waitForDisplayed();
    expect(await catalogPage.catalogPageTitle.isDisplayed()).to.equal(true);
  });

  it("Should open Elektronika frame", async () => {
    await catalogPage.elektronikaPageButton.click();
    expect(await catalogPage.catalogBody.isDisplayed()).to.equal(true);
  });

  it("Should open Smartfoni page", async () => {
    await catalogPage.mobilnieTelefoniFrameButton.click();
    await catalogPage.smartfoniFrameButton.waitForDisplayed();
    await catalogPage.smartfoniFrameButton.click();
    expect(
      await catalogPage.getCommonPageTitle("Мобильные телефоны").isDisplayed()
    ).to.equal(true);
  });

  it("Should find and open Iphone 13 128gb Dark Night page", async () => {
    await catalogPage.apple13DarknNightLink.scrollIntoView();
    await catalogPage.apple13DarknNightLink.click();
    expect(
      await catalogPage
        .getCommonPageTitle("Смартфон Apple iPhone 13 128GB (темная ночь)")
        .isDisplayed()
    ).to.equal(true);
  });
});
