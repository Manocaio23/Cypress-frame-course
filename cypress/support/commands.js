// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("navigateTo_webdriverUni_Homepage",()=>{
    cy.visit("/")
})


Cypress.Commands.add("selectProduct", productName=>{
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text().includes(productName)){
            cy.wrap($el).click()
        }
       })
})

Cypress.Commands.add("addProductTobBasket", productName=>{
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if($el.text()===productName){
           cy.log($el.text())
           cy.get('.productcart').eq(index).click()
        }
       })
})


Cypress.Commands.add("escreverJson", (firstName, lastName, email,comments)=>{
    cy.get('input[ placeholder="First Name" ]').type(firstName)
    cy.get('input[ placeholder="Last Name" ]').type(lastName)
    cy.get('input[ placeholder="Email Address" ]').type(email)
    cy.get('textarea[ placeholder="Comments" ] ').type(comments) 
    
})

// Cypress.Commands.add("escreverJson", (firstName, lastName, email,comments,$selector,textLocate)=>{
//     cy.get('input[ placeholder="First Name" ]').type(firstName)
//     cy.get('input[ placeholder="Last Name" ]').type(lastName)
//     cy.get('input[ placeholder="Email Address" ]').type(email)
//     cy.get('textarea[ placeholder="Comments" ] ').type(comments) 
//     cy.get($selector).contains(textLocate)
// })
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
