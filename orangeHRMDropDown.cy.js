///<reference types="cypress"/>
describe('Drop down feature', function () {
    it('with select tag test', function () {
        cy.on('uncaught:exception', () => {

            return false
        })

        //To get Url
        cy.visit('https://www.orangehrm.com/contact-sales/')
        //for scroll
        cy.contains('We just need a few details.').scrollIntoView()
        cy.wait(3000)
        //for first name
        cy.get('#Form_getForm_FullName').type('keerthana', { force: true })
        //for phone number
        cy.get('#Form_getForm_Contact').type('9876543210', { force: true })
        //for email
        cy.get('#Form_getForm_Email').type('keerthi123@gmail.com', { force: true })
        //for country drop 
        cy.get('select[id="Form_getForm_Country"]').select('Algeria', { force: true }).should('have.value', 'Algeria')
        cy.wait(3000)
        //for no of employess
        cy.get('select[id="Form_getForm_NoOfEmployees"]').select('11 - 15', { force: true }).should('have.value', '11 - 15')
        //Job title
        cy.get('#Form_getForm_JobTitle').type('Test engineer', { force: true })
        //comment button
        cy.get('#Form_getForm_Comment').type('working as a test engineer', { force: true })


    })
})