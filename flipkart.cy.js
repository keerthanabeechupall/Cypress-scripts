///<reference types="cypress"/>

const { not } = require("check-more-types")

describe('MyTestSuite', function () {
    it('FlipkartAddTo card', function () {
        cy.on('uncaught:exception', () => {

            return false

        })
        //Browser launch
        cy.visit('https://www.flipkart.com/')
        cy.log("browser launched")
        //To get a title of application
        cy.title().should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        //for click on login
        cy.get('._1_3w1N').click()
        //for wait  
        cy.wait(5000)
        //for user name
        cy.get(':nth-child(1) > ._2IX_2-').type('8688843032')
        //for password
        cy.get(':nth-child(2) > ._2IX_2-').type('keerthi@456')
        //for login
        cy.get('._1D1L_j > ._2KpZ6l').click()
        //for wait
        cy.wait(5000)
        //search mouse
        cy.get('._3704LK').type('mouse{Enter}')
        //cy.get('[data-id="ACCGBYTDFSZCDRAN"] > ._4ddWXP > .s1Q9rs').click()
        //Click on item1
        cy.get('._13oc-S').children().eq(1).click()
        //for child window
        cy.visit('https://www.flipkart.com/quantum-qhm224d-wired-optical-mouse/p/itm467d4c1522467?pid=ACCGYXG8NQCZC5XP&lid=LSTACCGYXG8NQCZC5XPJ6MJUG&marketplace=FLIPKART&q=mouse&store=6bo%2Fai3%2F2ay&spotlightTagId=BestsellerId_6bo%2Fai3%2F2ay&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=d1417221-d391-4e4d-859f-212abe6051ef.ACCGYXG8NQCZC5XP.SEARCH&ppt=sp&ppn=sp&ssid=sb0062ma340000001660830146397&qH=40203abe6e81ed98')
        //item1 text before add to cart
        cy.get('.B_NuCI').then(($div) => {
            const text = $div.text()
            cy.log(text)
        })
        //for scrolling
        cy.scrollTo(0, 500)
        cy.wait(5000)
        //For add to cart
        cy.contains('ADD TO CART').click()
        //for item1 text after adding to cart
        cy.get('_2-uG6-').children().then(($div) => {
            const text1 = $div.text1()
            cy.log(text1)
        })
        //for driver backward 
        cy.go('back')
        //scroll upto similar produts
        cy.scrollTo(0, 6000)
        
    })
})
