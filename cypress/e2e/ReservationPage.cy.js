describe('ReservationPage Test', () => {
  beforeEach(() => {
    // Assure-toi que l'application fonctionne sur http://localhost:3000/cancel
    cy.visit('http://localhost:3000/cancel');
  });

  describe('Component Rendering', () => {
    it('should render the Header component', () => {
      // Vérifie que le Header est bien rendu
      cy.get('header').should('exist');
    });

    it('should render the ListeReservation component', () => {
      // Vérifie que le composant ListeReservation est bien rendu
      cy.get('.liste-reservation').should('exist');
    });

    it('should render reservations and cancel buttons', () => {
      // Vérifie que les réservations sont affichées
      cy.get('.reservation').should('have.length', 2); // On s'attend à 2 réservations comme dans le mock

      // Vérifie que chaque réservation a un bouton Cancel
      cy.get('.reservation button').should('contain.text', 'Cancel');
    });
  });

  describe('Cancel Button Interaction', () => {
    it('should trigger cancellation action when clicking "Cancel"', () => {
      // On clique sur le bouton Cancel d'une réservation
      cy.get('.reservation button').first().click();

      // Vérifie que l'action de cancel est effectuée (si une redirection ou un changement d'état se produit)
      // On pourrait tester que la réservation a disparu ou que l'URL change (selon l'implémentation)
      cy.get('.reservation').should('have.length', 1); // Supposons qu'une réservation ait été annulée
    });
  });
});//
describe('ReservationPage Test', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000');
  });

  it('should render the reservations and cancel buttons', () => {
    
    cy.get('.reservation').should('have.length', 2); 
    
    cy.get('.reservation button').should('contain.text', 'Cancel');
  });

  it('should cancel a reservation and remove it from the list', () => {
    
    cy.get('.reservation button').first().click();

    
    cy.get('.reservation').should('have.length', 1); 
    cy.get('.reservation').first().should('not.contain', 'Parking A'); 
  });
});

