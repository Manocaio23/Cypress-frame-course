/// <reference types="Cypress" />   
describe('Validade webdriveruni homepage links', () => {

    before(() => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#data-table').scrollIntoView().invoke('removeAttr','target').click({force:true})
    });
   
    it('children()', ()=>{ 
        cy.get('.traversal-breadcrumb').children('.active').should('contain','Contact Us')
        
     })

     it('closest()', ()=>{ 
      cy.get('.traversal-badge').closest('ul').should('have.class','list-group')
    
    })

     it('eq()', ()=>{ 
         //novar forma de pegar uma lista
      cy.get('.traversal-drinks-list >*').eq(2).should('contain','Milk')
    
     })

     it('filter()', ()=>{ 
        cy.get('.btn-group-toggle >*').filter('.active').should('contain','Button-1')
    
     })

     it('find() pegando elementos de link e a cada find vai descendo', ()=>{ 
        cy.get('.traversal-pagination').find('li').find('a').should('have.length',7)

    })

    it('first() forma muito boa de pegar elementos navegando com > e pegando tudo da lista com *', ()=>{ 
        cy.get('.traversal-table > tbody > tr ').first().should('contain','Andy')
        
    
    })

    it('last()', ()=>{ 
        cy.get('.traversal-table > tbody > tr ').last().should('contain','Scott')
    
    })

    it.only('nextAll() depois do selecionando existem uma quantidade especifica', ()=>{ 
        cy.get('.traversal-drinks-list').contains('Espresso').nextAll().should('have.length','1')
    
    })

    it('nextUntil()', ()=>{ 
    
    
    })

    it('not()', ()=>{ 
    
    
    })

   
    
});