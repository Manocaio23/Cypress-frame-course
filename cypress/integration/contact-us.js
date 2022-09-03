/// <reference types="Cypress" />   
describe('Test Contact us form via Webdriver', () => {
    it('Should be able to submit a successul submission via contact us form', ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        // estamos usando o invoke para pegar no elemento selecionado o target e removendo ele para noa ir para outra aba
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})

    })
    it('Should be able to submit a successul submission via contact us form as  all fields are require', ()=>{
        
    })
});