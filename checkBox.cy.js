///<reference types="cypress"/>
describe('MyTestSuite', function () {
    it('Check box', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        //for url
        cy.visit('https://demo.automationtesting.in/Register.html')
        //to click on check box
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        //to uncheck check box
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')
        //to check values at a time
        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])

        




    })
})
