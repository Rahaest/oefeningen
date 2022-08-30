const { expect} = require('@playwright/test');

exports.ToolsQAHomePage = class ToolsQAHomePage {

    /**
     * @param page {import('playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.formsLink = page.locator("text=Forms");
    }

    async goto() {
        await this.page.goto("https://demoqa.com/");
    }

    async openForms() {
        await this.formsLink.first().click();
    }
}

