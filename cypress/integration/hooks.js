/// <reference types="Cypress" />   
describe('Validade webdriveruni homepage links', () => {

    before(() => {
      cy.log('before')
    });
   after(() => {
       cy.log('after')
   });

   beforeEach(() => {
    cy.log('before each')
   });

   afterEach(() => {
    cy.log('after each')
   });
    it('Teste1', ()=>{ 
        cy.log('teste1')
    });
    
    it('Teste2', ()=>{ 
        cy.log('teste2')
    });
});