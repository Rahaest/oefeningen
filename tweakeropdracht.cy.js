describe('Opdracht Cypress', () => {
    it('Visits Tweakers', () => {
        cy.visit('https://tweakers.net/')
        cy.contains('Alles accepteren').click()

        //Get the last article of 09/08/2022
        cy.contains('Zondag 28 augustus').click()
    
        cy.url().should('include', '20220828')

        //Check if the Author & Time is correct
        cy.contains('Door Jay Stout')
        cy.contains('28 augustus 2022')
    })
})