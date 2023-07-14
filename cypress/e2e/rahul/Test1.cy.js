describe('Test1 for practice', () => {

  it('Go to website', function () {
    //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.visit(Cypress.env('selenium'));
    cy.get('.search-keyword').type('ca');
    cy.get('.product:visible').should('have.length',4);
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    cy.log('It\'s a cypress log');
    console.log('It\'s a console log');

    //as()
    cy.get('.cart-icon').as('cartButton');
    cy.get('@cartButton').click();
    cy.get('@cartButton').click();

    cy.get('.products').find('.product').each(($el,index,$list) => {
      const textVeg = $el.find('.product-name').text();
      if (textVeg.includes('Cashews')) {
        cy.wrap($el.find('button')).click();
      }
    })

    cy.get('@cartButton').click();
    cy.get('li.cart-item p').eq(0).should('contain.text', 'Capsicum');

    cy.get('.brand').should('have.text', 'GREENKART');
    cy.get('.brand').should('contain.text', 'GREENKART');
    cy.get('.brand').should('contain', 'GREENKART');

  });


})