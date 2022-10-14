///<reference types="cypress"/>
describe('MyTestSuite', function () {
    it('FlipkartAddTo card', function () {
        cy.on('uncaught:exception', () => {

            return false

        })
        //flipkart login
        cy.loginFlipkart('8688843032','keerthi@456')
        //click on mouse
        cy.ClickOnMouse()
        //for item1
        cy.forItem1() 
        //for child window
        cy.switchToChildWindow()
        //item1 text before add to cart
       cy.item1TextBeforeAddToCart()
       //for scrolling
         cy. scrolling()
         //add to cart
         cy.AddToCart()



    })
})
        
