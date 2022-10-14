///<reference types="cypress"/>
describe('MyTestSuite', function () {
    it('Skills dropdown', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        cy.visit('https://demo.automationtesting.in/Register.html')
        //cy.scrollTo(0,500)
      /*  cy.get('#msdd').click()
        cy.wait(5000)
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
        cy.get('.ui-corner-all').contains('Filipino').click()
        cy.get('.ui-corner-all').contains('Hungarian').click()
        cy.get('.ui-corner-all').contains('apanese').click()*/

        cy.get('#Skills').select('Art Design').should('have.value','Art Design')
        cy.get('span[role=combobox]').click()
        cy.get('.select2-search__field').type('India')
        cy.get('.select2-search__field').type('{Enter}')

    


    })
})

