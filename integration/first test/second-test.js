context('IMDB homepage', () => {

  it('Herkules', function () { 
      cy
      .visit('https://www.imdb.com/')

      .get('#suggestion-search')
      .type('Titanic')
      .get('#iconContext-magnify')
      .click()

      .get(':nth-child(3) > .findList > tbody > .odd > .result_text > a')
      .contains('Titanic')
      .should('be.visible')
      .click()

      cy.get('.TitleBlock__Container-sc-1nlhx7j-0 > .RatingBar__RatingContainer-sc-85l9wd-0 > .RatingBar__ButtonContainer-sc-85l9wd-1 > [data-testid=hero-rating-bar__aggregate-rating] > .ipc-button > .ipc-button__text > .RatingBarButtonBase__ButtonContentWrap-sc-15v8ssr-3 > .AggregateRatingButton__ContentWrap-sc-1ll29m0-0')
      .contains('7.9/10')
      .should('be.visible')
      

  })
})
