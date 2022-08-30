const { expect} = require('@playwright/test');

exports.TweakersHomePage = class TweakersHomePage {

    /**
     * @param page {import('playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.getArticleLink = page.locator('a' ,{hasText:'Zondag 28 augustus'});
    }

    async goto() {
        await this.page.goto("https://tweakers.net/");
    }

    async goToNext() {
        await this.getArticleLink.first().click();
    }
}

