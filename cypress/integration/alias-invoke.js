/// <reference types="Cypress" />   
describe('Alias and invoke', () => {
    it('Validadete a specific hair care product', ()=>{
        cy.visit("https://www.automationteststore.com")
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt',5)
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    })

    it('Validadete product thumbnail', ()=>{
        cy.visit("https://www.automationteststore.com")
        cy.get('.thumbnail').as('productThumbnail')//a gente dar apelido para ele e oega com @
        cy.get('@productThumbnail').should('have.length',16)
        //dentro da classe prinecipal tem outra classe que invoka o titulo dela na tag e deve ter escrito add o carrinho
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart')
    })
    it.only('calculate total of normal and sale product ', ()=>{
    //     cy.visit("https://www.automationteststore.com")
    //     cy.get('.thumbnail').as('productThumbnail')//a gente dar apelido para ele e oega com @
        
    //     // o codigo percorre a classe do as inteira depois na classe de oneprice pecorre todos que tem unico preco pegando o texto
    //   //  cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {//find garante que a classe exite a de cima
    //     //   cy.log($el.text())
    //    // });
    //     var totalItens=0;
    //    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    //    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    //    cy.get('@itemPrice').then($linkText=>{
    //        var itemPrice=$linkText.split('$');//remover o simbolo 
    //        var intemPriceTotal=0;
    //        var i;
    //        for(i=0, i < itemPrice.length; i++) {
    //             cy.log(itemPrice[i])
    //             intemPriceTotal+=Number(itemPrice[i])
    //        }
    //        totalItens==intemPriceTotal;
    //        cy.log("Non Sale price intems total:" +intemPriceTotal)
        
    //    })
    //    //itens com novo preco
    //    cy.get('@saleItemPrice').then($linkText=>{
    //        var saleItemsPrice=0;
    //     var saleItemPrice =$linkText.split('$');
    //     var i;
    //     for(i=0, i < saleItemPrice.length; i++){
    //         cy.log(saleItemPrice[i])
    //     var saleItemPrice =$linkText.split('$');
    //         saleItemsPrice+=Number(saleItemPrice[i])

    //     }
    //     cy.log(" Sale price intems total:" +intemPriceTotal)
    //  //PRECISO REVISAR
   // })
    })
});