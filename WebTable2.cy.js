///<reference types="cypress"/>
describe('MyTestSuite', function () {
    it('Table Test', function () {
        cy.on('uncaught:exception', () => {

            return 
        })

        //To get Urll
        cy.visit('https://testautomationpractice.blogspot.com/')
        //scroll upto Html table
       cy.contains('HTML Table').scrollIntoView()
        //Check value present in anyware of table
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')
        //Check value present in specific row and cloumn
        cy.get('table[name=BookTable]>  tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
        //Verify the book name "master in java" whose author is amod
        cy.get('table[name=BookTable]> tbody >tr td:nth-child(2)').each(($e,index,$list ) =>{
         const text=$e.text()
            if(text.includes("Amod"))
            {
                cy.get('table[name=BookTable]> tbody >tr td:nth-child(1)').eq(index).then(function(bname)
                {
                  const bookName=bname.text()
                  expect(bookName).to.equal("Master In Java")
                })
            }
        })
   })
})
