/// <reference types="Cypress" />   
describe('Cypress web security', () => {
    it('Validade visiting two different domains', ()=>{ // para conseguirgos ir para outro site dando certo no json configuramos
       cy.visit('http://www.webdriveruniversity.com')
       cy.visit('https://www.automationteststore.com')

    })
    it('Validade visiting two different domains via user action', ()=>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#automation-test-store').invoke('removeAttr','target')
    })
});