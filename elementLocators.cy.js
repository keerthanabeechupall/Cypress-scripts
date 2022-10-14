///<reference types="cypress"/>
describe('Element locators', function () {
    it('Verify types of locators', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        //to get url
        cy.visit('https://demo.nopcommerce.com/')
        //enter apple MacBook pro 13-inch
        cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch')
        //click on search button
        cy.get('[type=submit]').click()
        //scroll upto apple macBook
        cy.scrollTo(0, 900)
        //click on add to cart
        cy.wait(3000)
        cy.get('.product-box-add-to-cart-button').click({force:true})
        cy.scrollTo(0,500)
        cy.get('#product_enteredQuantity_4').clear().type('3')
        cy.get('#add-to-cart-button-4').click()
        cy.wait(5000)
        cy.get('#topcartlink > a > span.cart-label').click()
        cy.wait(3000)
        cy.get('.product-unit-price').contains('$1,800.00')
        cy.log("product validated")
    })
})