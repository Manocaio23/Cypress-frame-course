class HomePage_PO{
    visitHompage(){
        cy.visit(Cypress.env("webdriveruni_homepage"),{timeout:60000})
    }

    clickOn_ContactUS_Button(){
        cy.get('#contact-us').scrollIntoView().invoke('removeAttr','target').click({force:true})
    }
}

export default HomePage_PO;