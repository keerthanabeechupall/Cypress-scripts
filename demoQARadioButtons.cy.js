///<reference types="cypress"/>
describe('UI elements', function () {
    it('Verify radio buttons', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        //To get URL
        cy.visit('https://demoqa.com/text-box')
        //To get a title of application
        cy.title().should('eq', 'ToolsQA');
        //for scroll
        cy.scrollTo(0, 100)
        //Click on radio buttons
        cy.contains('Radio Button').click()
        cy.wait(3000)
        //for yes button click
        cy.get('#yesRadio').should('not.be.disabled').should('not.be.checked').click({ force: true })
        //for impressive button
        cy.get('#impressiveRadio').should('not.be.disabled').should('not.be.checked').click({ force: true })
        //for no button
        cy.get('#noRadio').should('be.disabled')
        //for yes button text compare
        cy.get('#yesRadio').then(($div) => {
            const text = $div.text()
            cy.log(text)
        })
        //for impressive button text compare
        cy.get('#impressiveRadio').then(($div) => {
            const text1 = $div.text()
            cy.log(text1)
        })
    })
})
