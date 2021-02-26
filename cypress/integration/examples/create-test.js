/// <reference types="cypress" />

context('login', () => {
    before(() => {
      cy.visit('https://qa.teacher.wexl.in/')
      cy.get('input[name="username"]').eq(0).type("hemanth20skmurthy94@gmail.com",{force: true})
        cy.get('input[name="password"]').eq(0).type("Hemanth20*",{force: true})
        cy.get('input[value="Sign in"]').eq(0).click({force: true})
    })
    it("create-test",() =>{
        cy.url().should('include','/homepage/teacherhome');
        cy.contains("My Tests").click()
        cy.contains("Test Repository").click({force:true})
        cy.get(".create-test").eq(0).click()
        //Enter Test name
        cy.get(".form-pad").eq(0).clear().type("Mathematics Test1",{force:true})
        //Uncheck checkboxes
        cy.get("input[type=checkbox]").eq(1).uncheck()
        cy.get("input[type=checkbox]").eq(2).uncheck()
        cy.get("input[type=checkbox]").eq(3).uncheck()
        //Select Boar,Grade and subject
        cy.get("select[formcontrolname=board]").select("CBSE")
        cy.get("select[formcontrolname=grade]").select("Ninth Grade - IX")
        cy.get("select[formcontrolname=subject]").select("Mathematics")
        //Select Total number of questions
        cy.get("select[formcontrolname=totalques]").select("5")
        cy.get(".next").eq(0).click()
        // All topics 
        cy.get('ul[style="background-color:#F7F9FB"]').within( function(){
            cy.get('input[type="checkbox"]').eq(0).check()
        })
        //Selected topics choosen from All topics
        cy.get(".mat-expansion-panel").within(function(){
            cy.get("input[type=checkbox]").eq(0).check({force:true})
        })
        //select Questions
        cy.get(".m-top").within(function(){
            cy.get("input[type=checkbox]").eq(2).check({force:true})
            cy.get("input[type=checkbox]").eq(3).check({force:true})
            cy.get("input[type=checkbox]").eq(4).check({force:true})
            cy.get("input[type=checkbox]").eq(5).check({force:true})
            cy.get("input[type=checkbox]").eq(6).check({force:true})
        })
        //click on Next button
        cy.get(".next").eq(0).click({force:true})
        cy.contains('Mathematics Test1').should('be.visible')
        //click on Done button
        cy.get(".next").contains('Done').click({force:true})
    })
    
});
