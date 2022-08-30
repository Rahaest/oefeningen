import { ToolsQAFormsPage } from "./ToolsQAFormsPage";
import { ToolsQAPracticeFormsPage } from "./ToolsQAPracticeFormsPage.";

const { test, expect } = require('@playwright/test');
const { ToolsQAHomePage } = require('./ToolsQAHomePage');

test('Should go to the Practice Form page and Submit details' , async({ page }) => {
    const homePage = new ToolsQAHomePage(page);
    await homePage.goto();
    await homePage.openForms();
    const formsPage = new ToolsQAFormsPage(page);
    await formsPage.openPracForms();
    const pracForm = new ToolsQAPracticeFormsPage(page);
    await pracForm.submit();
    });