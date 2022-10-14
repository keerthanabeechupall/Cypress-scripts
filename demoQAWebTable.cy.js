///<reference types="cypress"/>
describe('My test suite', function () {
    it('Web Table', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        //To get URL
        cy.visit('https://demoqa.com/text-box')
        cy.viewport(1024, 1024)

        //To get a title of application
        cy.title().should('eq', 'ToolsQA');
        //for scroll
        cy.scrollTo(0, 100)
        //Click on web tablee
        cy.contains('Web Tables').click()
        cy.wait(3000)
        //add the row
        cy.get('#addNewRecordButton').click()
        //for first name
        cy.get('#firstName').type('keerthana')
        //for last name
        cy.get('#lastName').type('Beechupally')
        //for email
        cy.get('#userEmail').type('keerthi123@gmail.com')
        //for age
        cy.get('#age').type('22')
        //for salary
        cy.get('#salary').type('20000')
        //for department
        cy.get('#department').type('testing')
        //for submit
        cy.get('#submit').click()
        //click on edit option
        cy.get('#edit-record-4 > svg').click()
        //Edit salary option
        cy.get('#salary').clear().type('50000')
        //click on submit
        cy.get('#submit').click()
        //delete row
        cy.get('#delete-record-4 > svg').click()
    })
})
