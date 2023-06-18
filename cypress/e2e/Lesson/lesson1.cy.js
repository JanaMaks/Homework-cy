/// <reference types="cypress" />
beforeEach('setup',()=>{
  cy.viewport(1440,1080);
  cy.visit('https://www.google.com');
  cy.url().should('contain','google');
})
describe('Tests of cookie pop-up on google',()=>{   
  it('Accept Cookies', ()=>{
      cy.get('#L2AGLb > .QS5gu').should('be.visible');
      cy.get('#L2AGLb > .QS5gu').click();
      cy.get('#L2AGLb > .QS5gu').should('not.be.visible');
  })
  it('Reject Cookies', ()=>{
       cy.get('#W0wltc > .QS5gu').should('be.visible');
       cy.get('#W0wltc > .QS5gu').click();
       cy.get('#W0wltc > .QS5gu').should('not.be.visible');
  })
  it('Customise Cookie', ()=>{
      cy.get('.eOjPIe').should('be.visible');
      cy.get('.eOjPIe').click();
      cy.url().should('contain','consent');
  })
})
describe.only('Tests of search on google',()=>{
  it.skip('Search Wikipedia with {enter}',()=>{
      cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
      cy.get('#APjFqb').clear().type('Wikipedia').type('{enter}');
      cy.url().should('contain','?q=Wikipedia');
  })
  it('Search Wikipedia with click on search button',()=>{
      cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
      cy.get('#APjFqb').clear().type('Wikipedia');
      cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
      cy.url().should('contain','?q=Wikipedia');
  })
  it('Search Wikipedia with click on element from list',()=>{
      cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
      cy.get('#APjFqb').clear().type('Wikipedia');
      cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
      cy.url().should('contain','?q=Wikipedia');
  })
  it('Search Wikipedia with click on element from list functions',()=>{
      cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
      cy.get('#APjFqb').clear().type('Wikipedia').wait(1000);        
      cy.get('.erkvQe').children().children().children().eq(0).click();
      cy.url().should('contain','?q=wikipedia');
      
  })
  it.only('Search Wikipedia with click on element from list',()=>{
      cy.get('#L2AGLb > .QS5gu').click().should('not.be.visible');
      cy.get('#APjFqb').clear().type('Wikipedia');
      cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click();
      cy.url().should('contain','?q=Wikipedia');
      cy.get('[href="https://www.wikipedia.org/"] > .LC20lb').click().wait(1000);
      cy.origin("https://www.wikipedia.org", ()=>{
          cy.url().should('contain','wikipedia')
      })
      
  })
})