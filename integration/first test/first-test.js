context('Google homepage', () => {



    beforeEach(() => {

      cy.visit('https://www.google.se/')

      cy.get('#L2AGLb > .QS5gu').click()

      
    })
  
    it('Sveriges statsminister', function () {

 //sökmotorn ska ge mig en träff på statsministern
      cy.get('.gLFyf.gsfi').type('Vem är sveriges statsminister?')
      
 // search click button
      cy.get('.gNO89b')
      .contains('Sök på Google').should('be.visible')
      
      .click()

      

    })

   
 })

