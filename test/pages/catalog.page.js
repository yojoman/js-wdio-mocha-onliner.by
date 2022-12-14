const BasePage = require("./base.page.js");

class CatalogPage extends BasePage {
  get catalogPageTitle() {
    return $('.//div[text()="Каталог"][@class="catalog-navigation__title"]');
  }

  get elektronikaPageButton() {
    return $('.//span[text()="Электроника"]');
  }

  get catalogBody() {
    return $('.//div[@class="catalog-navigation-list__wrapper"]');
  }

  get mobilnieTelefoniFrameButton() {
    return $('.//div[contains(text(),"Мобильные телефоны")]');
  }

  get smartfoniFrameButton() {
    return $('.//a[@href="https://catalog.onliner.by/mobile"]');
  }

  get apple13DarknNightLink() {
    return $('.//span[text()="Смартфон Apple iPhone 13 128GB (темная ночь)"]');
  }
}

module.exports = new CatalogPage();
