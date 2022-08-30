class ToolsQAPracticeFormsPage {

    submit(){
        cy.get('#firstName').type("Raf");
        cy.get('#lastName').type("Haest");
        cy.contains('Male').click();
        cy.get('#userNumber').type("0123456789");
        cy.get('#submit').click();

    }
}

export default new ToolsQAPracticeFormsPage();