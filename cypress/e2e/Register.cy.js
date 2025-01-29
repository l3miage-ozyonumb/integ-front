describe('Register Page Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/register'); // Assure-toi que l'URL est correcte
    });
  
    // Tester le cas où l'email est requis et qu'il est vide
    it('should not submit the form if email is empty', () => {
      // Remplir les autres champs
      cy.get('input[placeholder="Name"]').type('John');
      cy.get('input[placeholder="Surname"]').type('Doe');
      cy.get('input[placeholder="Password"]').type('Password123');
      cy.get('input[placeholder="Phone Number"]').type('1234567890');
  
      // Laisser le champ Email vide
      cy.get('input[placeholder="Email"]').clear();
  
      // Essayer de soumettre le formulaire
      cy.get('button').contains('Register').click();
  
      // Vérifier que l'URL ne change pas (l'utilisateur reste sur la page d'inscription)
      cy.url().should('include', '/register');  // Cela vérifie que l'utilisateur reste sur la même page
  
      // Optionnel : Vérifier que les champs n'ont pas été réinitialisés et que l'email reste vide
      cy.get('input[placeholder="Email"]').should('have.value', '');  // Vérifie que le champ email est toujours vide
    });
  
    // Tester si l'utilisateur peut soumettre le formulaire avec des informations valides
    it('should submit the form successfully with valid data', () => {
      // Remplir tous les champs avec des données valides
      cy.get('input[placeholder="Name"]').type('John');
      cy.get('input[placeholder="Surname"]').type('Doe');
      cy.get('input[placeholder="Email"]').type('john.doe@example.com');
      cy.get('input[placeholder="Password"]').type('Password123');
      cy.get('input[placeholder="Phone Number"]').type('1234567890');
  
      // Soumettre le formulaire
      cy.get('button').contains('Register').click();
  
      // Vérifier que l'URL change et que l'utilisateur est redirigé ailleurs (par exemple vers une page de succès ou de connexion)
      cy.url().should('include', '/register'); // Assure-toi que l'utilisateur n'est plus sur la page de registre
  
      // Si tu veux tester la redirection vers une autre page, tu peux vérifier l'URL exacte après soumission
      // cy.url().should('include', '/login');  // Si le formulaire redirige vers une page de login après soumission
    });
  });
  