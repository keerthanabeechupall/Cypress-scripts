///<reference types="cypress-iframe"/>
import 'cypress-iframe'
describe('MyTestSuite', function () {
    it('Frames', function () {
        cy.on('uncaught:exception', () => {

            return false
        })
        //To get URL
        cy.visit('https://jqueryui.com/draggable/')  
        //for frame loading
        cy.frameLoaded('.demo-frame')
        //switching to iframe
        cy.iframe().find('#draggable').then(function(t){
            const text1=t.text()
         //assertion to verify text
         expect(text1).to.contains('Drag me around');
         cy.log(text1);



        })

        
  })
  

    })
