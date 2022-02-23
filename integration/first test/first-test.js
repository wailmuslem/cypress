context('Saucedemo orders', () => {


    beforeEach(() => {

      cy.visit('https://www.saucedemo.com/')

  
    })
  //inloggning till saucedemo

    it('Sign in', function () {
      cy
      .visit('https://www.saucedemo.com/')

 
      .get('#user-name').type('standard_user')
      

      .get('#password').type('secret_sauce')
      
      .get('#login-button')
      
      .click()

      

    })

   
 })

