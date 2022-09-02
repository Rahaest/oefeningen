class ToolsQAHomePage {

    navigate() {
        cy.visit('https://demoqa.com/');
    }

    openForms(){
        cy.contains('Forms').click()
    }

}

export default new ToolsQAHomePage();