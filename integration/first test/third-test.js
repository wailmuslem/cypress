context('Saucedemo orders', () => {


    beforeEach(() => {
      cy

      .visit('https://www.saucedemo.com/')

       
      .get('#user-name').type('standard_user')
      

      .get('#password').type('secret_sauce')
      
      .get('#login-button') 

      .click()

  
    })
 

    it('Add three products and make a complete order', function () {
      cy
      
      .get('#add-to-cart-sauce-labs-backpack')
      .click()

      .get('#add-to-cart-sauce-labs-fleece-jacket')
      .click()


      .get('#add-to-cart-sauce-labs-onesie')
        .click()

      .get('#shopping_cart_link')
      .click()
    
      .get('#checkout')
      .click()

      .get('#first-name').type('Hello')
      .get('#last-name').type('World')
      .get('#postal-code').type('12345')

      .get('#continue')
      .click()

      .get('#finish')
      .click()

        .get('#back-to-products')
        .click()


    })

   
 })
