describe('Tea Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/'); 
  });

  it('should display the welcome message, and a link to for the tea page', () => {
    cy.contains('Welcome to Tea Subscriptions!').should('exist');
    cy.contains('Checkout Our Tea Selection').should('exist');
    cy.get('[href="/teas"] > h2');
  })

  it('should be able to display the tea details after link is clicked', () => {
    cy.get('[href="/teas"] > h2').click();
    cy.get('h1').contains('Welcome to my wonderful Tea Selection');
    cy.get('.tea-cards-container > :nth-child(1)');
    cy.get(':nth-child(1) > img');
    cy.get(':nth-child(1) > .tea-title');
    cy.get(':nth-child(1) > .tea-description');
    cy.get(':nth-child(1) > .tea-brew-time');
    cy.get(':nth-child(1) > .tea-temperature');
  })

  it('should go back to the home page after being clicked', () => {
    cy.get('[href="/teas"] > h2').click();
    cy.get('.back-btn').click();
    cy.contains('Welcome to Tea Subscriptions!').should('exist');
  })
})
