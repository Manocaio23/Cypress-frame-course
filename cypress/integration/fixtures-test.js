/// <reference types="Cypress" />   
describe('Validade webdriveruni homepage links', () => {

    before(() => {
        cy.fixture('example').then(function(data){
            //this.data=data;
            globalThis.data=data; // as duas podem funcionar ou nao 
        })

        cy.fixture("user").as("usuario")

        cy.visit('/')
        cy.get('#contact-us').scrollIntoView().invoke('removeAttr','target').click({force:true})
    });
   
    it('Preencher Formulario', ()=>{ 
       cy.get('input[ placeholder="First Name" ]').type(data.firstName)
        
     })

     it('Preencher formulario outra forma', ()=>{
         cy.get("@usuario").then((usuario)=>{
            cy.get('input[placeholder="First Name"]').type(usuario.firstName)
         }) 
        
    
    })


   
    
});