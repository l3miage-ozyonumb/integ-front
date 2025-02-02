describe('Register Page Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register'); 
  });

  it('should not submit the form if email is empty', () => {
   
    cy.get('input[placeholder="Name"]').type('John');
    cy.get('input[placeholder="Surname"]').type('Doe');
    cy.get('input[placeholder="Password"]').type('Password123');
    cy.get('input[placeholder="Phone Number"]').type('1234567890');

    
    cy.get('input[placeholder="Email"]').clear();

   
    cy.get('button').contains('Register').click();

    cy.url().should('include', '/register');  

    cy.get('input[placeholder="Email"]').should('have.value', '');  
  });

  
  it('should submit the form successfully with valid data', () => {
    
    cy.get('input[placeholder="Name"]').type('John');
    cy.get('input[placeholder="Surname"]').type('Doe');
    cy.get('input[placeholder="Email"]').type('john.doe@example.com');
    cy.get('input[placeholder="Password"]').type('Password123');
    cy.get('input[placeholder="Phone Number"]').type('1234567890');

    
    cy.get('button').contains('Register').click();

    
    cy.url().should('include', '/register'); 

    
  });
});
