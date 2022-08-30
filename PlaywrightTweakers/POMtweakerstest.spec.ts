const { test, expect } = require('@playwright/test');
const { TweakersHomePage } = require('./TweakersHomePage');
const { TweakersArticlePage } = require('./TweakerArticlePage');

test('should go to the latest article of yesterday' , async({ page }) => {
    const tweakerPage = new TweakersHomePage(page);
    await tweakerPage.goto();
    await tweakerPage.goToNext();
  });

test('should check the author and date of the last article of yesterday', async ({ page }) => {
    const articlePage = new TweakersArticlePage(page);
    await articlePage.goto();
    await articlePage.checkPost();
});