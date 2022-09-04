/// <reference types="Cypress" />   
describe('Add mutiple item to basket', () => {

    before(() => {
        cy.fixture('products').then(function (data) {
        globalThis.data = data
    })
    });
    beforeEach(() => {
    
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=52')
        //cy.get('#contact-us').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    });

    it('Add specifiic items to basket', () => {
        globalThis.data.productName.forEach(function(element){
            cy.addProductTobBasket(element)
        })
    })


});