/// <reference types="Cypress" />   
describe('Test Contact us form via Webdriver', () => {
    it('Interagindo com uma lista de produtos englobados', ()=>{
        cy.visit("https://www.automationteststore.com")
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index:" + index + ":" + $el.text())
          })
    })

    it('Interagir e clicar em uma lista de escolha', ()=>{
        cy.visit("https://www.automationteststore.com")
        cy.get('a[href*="product/category&path"]').contains("Hair Care").click()
       //'Curls to straight Shampoo'
       cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text().includes(productName)){
            cy.wrap($el).click()
        }
       })
       
    })
});