///<reference types="cypress"/>
describe('Dropdownfeature', function () {
    it('withselecttagtest', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        cy.launchURL('https://www.orangehrm.com/contact-sales/')
        cy.scrollingUptoParticularElement()
        cy.fillOutFirstname()
        cy.fillOutPhonenumber()
        cy.fillOutEmailId()
        cy.clickOnCountryDropDown()
        cy.clickOnNoOfEmployess()
        cy.fillOutJobTitle()
        cy.clickOnCommentButton()
    })
})
