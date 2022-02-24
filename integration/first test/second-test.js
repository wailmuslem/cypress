context('Saucedemo orders', () => {


    beforeEach(() => {
      cy

      .visit('https://www.saucedemo.com/')

       
      .get('#user-name').type('standard_user')
      

      .get('#password').type('secret_sauce')
      
      .get('#login-button') 

      .click()

  
    })
 

    it('Add at least two procuts and control the shopping cart shows correct price', function () {
      cy
      
      .get('#add-to-cart-sauce-labs-backpack')
      .click()

      .get('#add-to-cart-sauce-labs-fleece-jacket')
      .click()

      .get('#shopping_cart_link')
      .click()

      .get('.inventory_item_price').contains('$29.99')

      .get('.inventory_item_price').contains('$49.99')
    
      

    })

   
 })
