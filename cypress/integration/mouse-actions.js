/// <reference types="Cypress" />   
describe('Validade webdriveruni homepage links', () => {

   before(() => {
      cy.visit('http://www.webdriveruniversity.com')
      cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
    
   });
    

    it('Confirm links redirect to the correct pages', ()=>{ 
       
      
        cy.get('#draggable').trigger('mousedown',{which: 1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
    
     })

     it('Confirm links redirect to the correct pages', ()=>{ 
       
       
         
       cy.get('#double-click').dblclick()
    
     })

     it('Apertando e segurando', ()=>{ 
         
       cy.get('#click-box').trigger('mousedown',{which: 1}).then(($element)=>{
           expect($element).to.have.css('background-color','rgb(0,255,0)')
       })
    
     })
    
});