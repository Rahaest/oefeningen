describe('Opdracht Cypress', () => {
    it('Visits Tweakers', () => {
        cy.visit('https://tweakers.net/')
        cy.contains('Alles accepteren').click()

        //Get the last article of 09/08/2022
        cy.contains('Dinsdag 9 augustus').click()
        cy.url().should('include', '20220809')

        //Check if the Author & Time is correct
        cy.contains('Door Sabine Schults')
        cy.contains('9 augustus 2022 20:33')
    })
})