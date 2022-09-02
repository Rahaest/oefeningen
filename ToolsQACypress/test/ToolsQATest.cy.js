import homePageCy from "../pages/ToolsQAHomePage.cy"
import formsPageCy from "../pages/ToolsQAFormsPage.cy"
import practiceFormCy from "../pages/ToolsQAPracticeFormsPage.cy"


describe("Testing ToolsQA to navigate", () => {

    it("Open homepage", () => {
        cy.viewport(1920,1080);
        homePageCy.navigate();
        homePageCy.openForms();
        formsPageCy.openPracticeForms();
        practiceFormCy.setFirstName("Test");
        practiceFormCy.setLastName("Persoon");
        practiceFormCy.setUserNumber("9876543210");
        practiceFormCy.setOther();
        practiceFormCy.fillIn();
        practiceFormCy.setMale();
        practiceFormCy.submit();
    })
})