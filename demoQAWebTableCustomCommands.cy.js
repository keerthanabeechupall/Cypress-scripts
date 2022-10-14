///<reference types="cypress"/>
describe('My test suite', function () {
    it('Web Table', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        cy.launchURL('https://demoqa.com/text-box')
        cy.titleOfApplication('ToolsQA')
        cy.scrolling()
        cy.clickOnWebTableQA()
        cy.addTheRowInTable()
        cy.fillOutFirstName()
        cy.fillOutLastName()
        cy.fillOutUserEmail()
        cy.fillOutAge()
        cy.fillOutSalary()
        cy.fillOutDepartment()
        cy.clickOnSubmitButton()
        cy.clickOnEditOption()
        cy.editSalaryOption()
        cy.clickOnSubmitButton()
        cy.deleteRow()
    })
})

