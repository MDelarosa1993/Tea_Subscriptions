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
    cy.get('.subscription-name')
    cy.get('.tea-list > :nth-child(1)')
    cy.get('.subscription-info > :nth-child(1)')
    cy.get('.subscription-info > :nth-child(2)')
    cy.get('.subscription-info > :nth-child(3)')
    cy.get('.teas-heading')
    cy.get(':nth-child(1) > .tea-title')
    cy.get(':nth-child(1) > .tea-description')
    cy.get('.tea-list > :nth-child(1) > :nth-child(3)')
    cy.get('.tea-list > :nth-child(1) > :nth-child(4)')
    cy.get(':nth-child(1) > .tea-image')
  })

  it('should activate/deactivate the subscription when clicked', () => {
    cy.get(':nth-child(2) > a > h3').click()
    cy.get('.status-actions')
  })

  it('should go back home when clicked', () => {
    cy.get(':nth-child(2) > a > h3').click();
    cy.get('.back-to-main').click();
    cy.contains('Welcome to Tea Subscriptions!').should('exist');
  })
});