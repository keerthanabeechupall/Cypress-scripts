///<reference types="cypress"/>
describe('MyTestSuite', function () {
    it('Login Test', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        //for login
        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
        
    })
    it('Add new Customer',function(){
        //login
        cy.login('admin@yourstore.com','admin')

        //add customer
        cy.log('New customer added............')


    })
    it('edit customer details',function(){
        //login
        cy.login('admin@yourstore.com','admin')

        //edit customer
        cy.log('Customer details are edited.............')


    })

})


