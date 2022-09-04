/// <reference types="Cypress" />   
describe('Validade webdriveruni homepage links', () => {
    it('Confirm links redirect to the correct pages', ()=>{ 
       cy.visit('/')
       cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true})
       cy.get('#myInput').type('A')
       cy.get('#myInputautocomplete-list > *').each(($el, index, $list)=>{
          const prod=  $el.text();
          const productToSelect='Avacado';

          if (prod===productToSelect) {
              $el.trigger()
              cy.get('#submit-button').click()
              cy.url().should('include',productToSelect)
          }
       }).then(()=>{
        cy.get('#myInput').type('C')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list)=>{
            const prod=  $el.text();
            const productToSelect='Chicken';
  
            if (prod===productToSelect) {
                $el.click()
                cy.get('#submit-button').click()
                cy.url().should('include',productToSelect)
            }

       })

      
        
        
    })
    
});
});