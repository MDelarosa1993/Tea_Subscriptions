describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/'); 
  });

  it('should display the welcome message and navigation link', () => {
    cy.contains('Welcome to Tea Subscriptions!').should('exist');
    cy.contains('Checkout Our Tea Selection').should('exist');
    cy.get('.search-input').should('exist');
    cy.get('.section > h2')
    cy.contains('Our Subscriptions').should('exist');
  });

  it('should fetch and display subscriptions', () => {
    cy.get('.home-card').should('have.length.greaterThan', 0);
    cy.get('.section > :nth-child(2)')
    cy.get(':nth-child(2) > a > h3') 
    cy.get(':nth-child(2) > h4')
    cy.get(':nth-child(2) > .teas-list > :nth-child(1) > .tea-image')
    cy.get(':nth-child(2) > .teas-list > :nth-child(1) > strong')
    cy.get(':nth-child(2) > .teas-list > :nth-child(1) > :nth-child(3)')
    cy.get(':nth-child(2) > .teas-list > :nth-child(1) > :nth-child(4)')
    cy.get(':nth-child(2) > .teas-list > :nth-child(1) > :nth-child(4)')
  });
})

