/// <reference types="Cypress" />   
describe('Validade webdriveruni homepage links', () => {

    before(() => {
        cy.fixture('example').then(function(data){
            //this.data=data;
            globalThis.data=data; // as duas podem funcionar ou nao 
        })

        cy.visit('/')
        cy.get('#contact-us').scrollIntoView().invoke('removeAttr','target').click({force:true})
    });
   
    it('Preencher Formulario', ()=>{ 
      
              cy.escreverJson(Cypress.env("first_name"),data.lastName,data.email,data.comments)  
     })

     it('Preencher formulario outra forma', ()=>{
        
        
    
    })


   
    
});