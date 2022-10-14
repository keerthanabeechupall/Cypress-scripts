///<reference types="cypress"/>

const { darkolivegreen } = require("color-name")
const { contains } = require("cypress/types/jquery")

describe('Drop down feature1', function () {
    it('with div tag test', function () {
        cy.on('uncaught:exception', () => {

            return false
        })

        //To get Url
        cy.visit('https://demoqa.com/date-picker')
        //to click on date picker
        cy.get('#dateAndTimePickerInput').click()
        //select month
        cy.get('.react-datepicker__month-read-view--down-arrow').click()
        //select july
        cy.get('.react-datepicker__month-option').contains('July').click()
        //click on 3 rd
        cy.get(':nth-child(2) > .react-datepicker__day--003').click()
        //Click on  year
        cy.get('.react-datepicker__year-read-view--selected-year').click()
        //Select year 1999
        cy.get('#dateAndTimePicker > div.react-datepicker__tab-loop > div.react-datepicker-popper > div > div > div.react-datepicker__month-container > div.react-datepicker__header > div.react-datepicker__header__dropdown.react-datepicker__header__dropdown--scroll > div.react-datepicker__year-dropdown-container.react-datepicker__year-dropdown-container--scroll > div').contains('1999').click()
        //for click on time
        cy.get('.react-datepicker-time__header').click()
        //select time
        cy.get('.react-datepicker__time-list-item').contains('01:00').click() 
    })
})
