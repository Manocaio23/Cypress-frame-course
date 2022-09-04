class Contact_us_PO{
  
    PreencherFormulario(firstName, lastName, email, comments){
        cy.get('input[ placeholder="First Name" ]').type(firstName)
        cy.get('input[ placeholder="Last Name" ]').type(lastName)
        cy.get('input[ placeholder="Email Address" ]').type(email)
        cy.get('textarea[ placeholder="Comments" ] ').type(comments) 
    }

}
export default Contact_us_PO;