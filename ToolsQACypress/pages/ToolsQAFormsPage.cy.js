class ToolsQAFormsPage{
    
    openPracticeForms(){
        cy.contains('Practice Form').click()
    }
}
export default new ToolsQAFormsPage();