describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/'); 
  });

  it('should display the welcome message, click on subscription and a customer link should exist', () => {
    cy.contains('Welcome to Tea Subscriptions!').should('exist');
    cy.contains('Checkout Our Tea Selection').should('exist');
    cy.get('.search-input').should('exist');
    cy.get('.section > h2')
    cy.contains('Our Subscriptions').should('exist');
    cy.get(':nth-child(2) > a > h3').click()
  });

  it('should display the customer details after cutsomer link is clicked', () => {
    cy.get(':nth-child(2) > a > h3').click();
    cy.get('a > p > strong').click();
    cy.get('.customer-profile');
    cy.get('.customer-profile-image');
    cy.get('.customer-profile-info');
    cy.get('h2');
    cy.get('.customer-profile-info > :nth-child(2)');
    cy.get('.customer-profile-info > :nth-child(3)');
  })

  it('should go back to home page when button is clicked', () => {
    cy.get(':nth-child(2) > a > h3').click();
    cy.get('a > p > strong').click();
    cy.get('button').click();
    cy.contains('Welcome to Tea Subscriptions!').should('exist');
  })
})