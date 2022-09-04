import HomePage_PO from '../support/PageObjects/webdriver-uni/HomePage_PO'
import Contact_us_PO from '../support/PageObjects/webdriver-uni/Contact_us_PO'
/// <reference types="Cypress" /> 
const homepage_PO= new HomePage_PO();  
const contact_US_PO = new Contact_us_PO();
describe('Test Contact us form via Webdriver', () => { // tbm usa o page objects
    before(() => {
        cy.fixture('example').then(function(data){
            //this.data=data;
            globalThis.data=data; // as duas podem funcionar ou nao 
        })

        cy.fixture("user").as("usuario")

       // cy.visit('/')
      // cy.get('#contact-us').scrollIntoView().invoke('removeAttr','target').click({force:true})
       
    });

    beforeEach(() => {
        
        homepage_PO.visitHompage();
        homepage_PO.clickOn_ContactUS_Button();
    });
   
    it('Should be able to submit a successul submission via contact us form', ()=>{
        cy.visit("/")
        // estamos usando o invoke para pegar no elemento selecionado o target e removendo ele para noa ir para outra aba
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})

    })
    it('Should be able to submit a successul submission via contact us form as  all fields are require', ()=>{
       
       contact_US_PO.PreencherFormulario(data.firstName, data.lastName,data.email,data.comments)
    })

 
});