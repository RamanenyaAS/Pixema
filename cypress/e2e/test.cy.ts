describe('is list of movie exist', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="cypress-movies"]').should('be.visible');
    cy.get('[data-testid^="cypress-card-"]').should('have.length.greaterThan', 0);
  })
})

describe('is search error box work', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="cypress-header"]').should('be.visible');
    cy.get('[data-testid="cypress-header-search"]').should('be.visible');
    cy.get('[data-testid="cypress-header-search"]').eq(0).click({ multiple: true, force: true  }).type('Example search text{enter}');
    cy.wait(2000);
    cy.get('[data-testid="cypress-search-error"').should('be.visible')
  })
})

describe('redirect to selected movie works', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid^="cypress-card-"]').should('have.length.greaterThan', 0);
    cy.wait(3000);
    cy.get('[data-testid^="cypress-card-"]').first().click();
    cy.url().should('include', '/movie/');
  })
})

describe('is Favorites work correct', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="cypress-movies"]').should('be.visible');
    cy.wait(3000);
    cy.get('[data-testid^="cypress-card-"]').first().click();
    cy.wait(3000);
    cy.get('[data-testid="cypress-add-to-favorites"]').click();
    cy.window().then((window) => {
      const storedMovies = JSON.parse(window.localStorage.getItem('movies'));
      expect(storedMovies).to.have.length(1);
    });
    cy.visit('http://localhost:3000/');
    cy.wait(3000);
    cy.get('[data-testid="cypress-aside"]').should("exist");
    cy.get('[data-testid="cypress-favorites-link"]').click();
    cy.get('[data-testid="cypress-favorites"]').should('be.visible');
    cy.get('[data-testid^="cypress-card-"]').should('have.length', 1);
    cy.wait(3000);
    cy.get('[data-testid^="cypress-card-"]').first().click();
    cy.wait(3000);
    cy.get('[data-testid="cypress-add-to-favorites"]').click();
    cy.window().then((window) => {
      const storedMovies = JSON.parse(window.localStorage.getItem('movies'));
      expect(storedMovies).to.have.length(0);
    });
    cy.get('[data-testid="cypress-favorites"]').should('not.exist');
    cy.visit('http://localhost:3000/');
    cy.wait(3000);
    cy.get('[data-testid="cypress-aside"]').should("exist");
    cy.get('[data-testid="cypress-favorites-link"]').click();
    cy.wait(3000);
    cy.get('[data-testid="cypress-favorites-empty"]').should('be.visible');
  })
})
