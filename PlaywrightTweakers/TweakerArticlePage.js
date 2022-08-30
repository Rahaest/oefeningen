const { expect} = require('@playwright/test');

exports.TweakersArticlePage = class TweakersArticlePage {

    /**
     * @param page {import('playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.author = page.locator('text=Jay Stout');
        this.date = page.locator('text=28 augustus 2022');
    }

    async goto() {
        await this.page.goto("https://tweakers.net/nieuws/list/20220828");
    }

    async checkPost(){
        await expect(this.author.first()).toHaveText("Jay Stout"); 
        await expect(this.date.first()).toHaveText(/28 augustus*./); 
    }
}


