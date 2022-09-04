/// <reference types="Cypress" />   
describe('Validade webdriveruni homepage links', () => {

    before(() => {
     
        cy.fixture("user").as("usuario")

        cy.navigateTo_webdriverUni_Homepage()
        cy.get('#contact-us').scrollIntoView().invoke('removeAttr','target').click({force:true})
    });
   
   

     it('Preencher formulario outra forma', ()=>{
         cy.get("@usuario").then((usuario)=>{
            cy.get('input[placeholder="First Name"]').type(usuario.firstName)
         }) 
        
    
    })


   
    
});