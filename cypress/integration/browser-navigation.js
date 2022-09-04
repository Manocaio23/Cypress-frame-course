/// <reference types="Cypress" />   
describe('Validade webdriveruni homepage links', () => {
    it('Confirm links redirect to the correct pages', ()=>{ 
       cy.visit('/')
       cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','contactus')
        
        //codigo da acao 
        cy.go('back')
        cy.reload()
        //voltou e validou
        cy.go('forward')
        cy.url().should('include','contactus')
    })
    
});