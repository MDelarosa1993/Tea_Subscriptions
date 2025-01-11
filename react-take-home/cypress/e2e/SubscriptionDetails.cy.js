describe('Subscription Details Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/'); 
  });

  it('should display the welcome message and navigation link', () => {
    cy.contains('Welcome to Tea Subscriptions!').should('exist');
    cy.contains('Checkout Our Tea Selection').should('exist');
    cy.get('.search-input').should('exist');
    cy.get('.section > h2')
  });

  it('should click a subscription', () => {
    cy.get('.home-card').should('have.length.greaterThan', 0);
    cy.get('.section > :nth-child(2)')
    cy.get(':nth-child(2) > a > h3').click()
  })

  it('should display the details when clicked', () => {
    cy.get(':nth-child(2) > a > h3').click()
    cy.get('.subscription-title').contains('Subscription Details')
    cy.get('.subscription-name').contains('Yearly Tea Tea Subscription')
    cy.get('.subscription-info > :nth-child(1)')
    cy.get('.subscription-info > :nth-child(2)')
    cy.get('.subscription-info > :nth-child(3)')
    cy.get('a > p > strong')
    cy.get('.teas-heading')
  })
});