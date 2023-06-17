/// <reference types="cypress" />

Cypress.Commands.add("closeCookiePopUp", () => {
  cy.get(".close_c").click().should("not.be.visible");
});

beforeEach("setup", () => {
  cy.visit("https://uwb.edu.pl/");
  cy.url().should("contain", "uwb");
});

  //1
  it('Sprawdź informacje o uczelni', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.get('.main-menu > :nth-child(1) > a > span').click().should('be.visible');
    cy.get('.current > [href="https://uwb.edu.pl/uniwersytet/o-nas"]').click().should('be.visible'); 
    cy.get('.dropdown-nav > .first > a').should('be.visible');
    cy.get('.dropdown-nav > :nth-child(2) > a').should('be.visible');
    cy.url().should('include', '/o-nas');
  });

  //2
it('Sprawdź przekierowanie po kliknięciu w zakładkę "Kandydat"', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.contains('Kandydat').click();
    cy.url().should('include', '/kandydat');
  });

  //3
  it('Sprawdź listę studiów podyplomowych', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.get('.main-menu > :nth-child(3) > a > span').click();
    cy.get(':nth-child(2) > .button-link > span').click().should('be.visible');
    cy.get(':nth-child(9) > .button-link > span').click();
    cy.url().should('contain', 'kandydat');
  });

  //4
  it('Sprawdź listę kierunków studiów nowości', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.get('.main-menu > :nth-child(3) > a > span').click().should('be.visible');
    cy.get(':nth-child(2) > .button-link > span').click();
    cy.get(':nth-child(1) > .button-link > span').click().should('be.visible');
    cy.url().should('contain', 'kandydat'); 
  });


  //5
  it('Sprawdź listę kierunków studiów II stopień', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.get('.main-menu > :nth-child(3) > a > span').click().should('be.visible');
    cy.get(':nth-child(2) > .button-link > span').click();
    cy.get(':nth-child(3) > .button-link > span').click().should('be.visible');
  });


  //6
  it('Sprawdź listę kierunków studiów jednolite magisterskie', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.get('.main-menu > :nth-child(3) > a > span').click().should('be.visible');
    cy.get(':nth-child(2) > .button-link > span').click();
    cy.get(':nth-child(4) > .button-link > span').click().should('be.visible');
  });

//7
  it('Sprawdź sekcję aktualności', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.get('#news-anchor-13 > .text-center > .btn').click();
    cy.get('.news-item').should('have.length.above', 0);
    cy.url().should("contain", "aktualnosci");
  });

  //8
  it('Sprawdź informacje o rekrutacji', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.contains('Kandydat').click();
    cy.get(':nth-child(4) > .button-link > span').click().should('be.visible');
    cy.contains('I etap').should('be.visible');
    cy.contains('II etap').should('be.visible');
    cy.url().should("contain", "rekrutacja");
  });


  //9
  it('Sprawdź informacje kontaktowe', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.contains('Kontakt').click();
    cy.contains('Uniwersytet w Białymstoku').should('be.visible');
    cy.contains('Rzecznik Prasowy').should('be.visible');
    cy.contains('Webmaster / Administrator Platformy Uczelnianej').should('be.visible');
    cy.contains('Elektroniczna Skrzynka Podawcza (ePuap):').should('be.visible');
    cy.url().should("contain", "kontakt");
  });


  //10
it('Sprawdź przekierowanie na stronę rekrutacji', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.contains('Rekrutacja').click();
    cy.contains('studia I i II stopnia oraz jednolite studia magisterskie').should('be.visible');
    cy.url().should('include', 'irk');
})


//11
it('Wyszukaj pracownika w książce adresowej z użyciem przycisku "szukaj"', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.get('.d-flex > .block-content > div > .btn').click();
    cy.get('#query').clear().type('Ciborowski');
    cy.get('#submit_form_searchEmplyerModuleForm').click();
})


//12
it('Wyszukaj pracownika w książce adresowej z ENTEREM', () => {
    cy.visit('https://www.uwb.edu.pl/');
    cy.get('.d-flex > .block-content > div > .btn').click();
    cy.get('#query').clear().type('Robert').type('{enter}');
    cy.url().should('contain', 'Robert');
})


