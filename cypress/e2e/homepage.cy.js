describe('homepage Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should load the homepage successfully', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should display the logo and site title', () => {
    cy.get('.logo-park').should('be.visible');
    cy.get('.logo-text').should('contain.text', 'Park-In');
  });

  it('should toggle the login menu when clicking the login icon', () => {
    cy.get('.menu').should('not.exist');
    cy.get('.logo-container-login').click();
    cy.get('.menu').should('be.visible');
    cy.get('.logo-container-login').click();
    cy.get('.menu').should('not.exist');
  });

  it('should navigate to the login page', () => {
    cy.get('.logo-container-login').click();
    cy.get('.menu-item').contains('Login').click();
    cy.url().should('include', '/login');
  });

  it('should navigate to the register page', () => {
    cy.get('.logo-container-login').click();
    cy.get('.menu-item').contains('Register').click();
    cy.url().should('include', '/register');
  });
});
