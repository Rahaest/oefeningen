const { expect} = require('@playwright/test');

exports.ToolsQAPracticeFormsPage = class ToolsQAPracticeFormsPage {

    /**
     * @param page {import('playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.genderBtn = page.locator("xpath=//*[@id='genterWrapper']/div[2]/div[1]/label");
        this.phoneNr = page.locator('#userNumber')
        this.submitBtn = page.locator('#submit');
    }

    async submit() {
        await this.firstName.fill('Raf');
        await this.lastName.fill('Haest');
        await this.genderBtn.check();
        await this.phoneNr.fill('0123456789');
        await this.submitBtn.click();
    }
}




