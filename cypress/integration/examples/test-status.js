/// <reference types="cypress" />

context('login', () => {
    before(() => {
      cy.visit('https://qa.teacher.wexl.in/')
      cy.get('input[name="username"]').eq(0).type("hemanth20skmurthy94@gmail.com",{force: true})
        cy.get('input[name="password"]').eq(0).type("Hemanth20*",{force: true})
        cy.get('input[value="Sign in"]').eq(0).click({force: true})
    })
    it("scheduled-test-ninth",() =>{
        cy.url().should('include','/homepage/teacherhome');
        cy.contains("My Tests").click()
        cy.contains("Scheduled Tests").click({force:true})
        cy.get(".form-control1").select("Ninth Grade - IX") 
        cy.get(".form-control1").select("Eighth Grade - VIII") 
        cy.get(".custom-tab").contains('Science').click()
    })
   
});