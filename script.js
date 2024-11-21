//your JS code here. If required.
cy.get('.box', { timeout: 10000 }) // Increases timeout to 10 seconds
  .should('have.css', 'width', '100px')
  .should('have.css', 'height', '100px');
