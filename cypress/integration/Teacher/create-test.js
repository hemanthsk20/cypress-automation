context('Teacher- Create Test', () => {

    it('Teacher-Create-Test-flow',function(){
    cy.get('mat-icon').contains('menu').click()
    cy.contains("My Tests").click()
    cy.get("a[href='#/test/test-repository']").contains("Test Repository").click({force:true})
    cy.get('mat-icon').contains('menu').click()
    cy.get(".create-test").eq(0).click()
    //Enter Test name
    cy.get(".form-pad").eq(0).clear().type("Mathematics Test1",{force:true})
    //Uncheck checkboxes
    cy.get("input[type='checkbox']").eq(9).uncheck()
    cy.get("input[type=checkbox]").eq(10).uncheck()
    cy.get("input[type=checkbox]").eq(11).uncheck()
    //Select Boar,Grade and subject
    cy.get("select[formcontrolname=board]").select("CBSE")
    cy.get("select[formcontrolname=grade]").select("Ninth Grade - IX")
    cy.get("select[formcontrolname=subject]").select("Mathematics")
    //Select Total number of questions
    cy.get("select[formcontrolname=totalques]").select("5")
    cy.get("button.next").eq(0).click()
    // All topics 
    cy.get('ul.nav.nav-pills.nav-sidebar.flex-column').within( function(){
        cy.get('input[type="checkbox"]').eq(0).check()
    })
    //Selected topics choosen from All topics
    cy.get(".mat-expansion-panel").within(function(){
        cy.get("input[type=checkbox]").eq(0).check({force:true})
    }) 
     //select Questions
     let questioncount = 5;
     cy.get(".m-top").within(function(){
        for(let i=0; i < questioncount; i++){
        cy.get("input[type=checkbox]").eq(i).check({force:true})
        }
    })
    //click on Next button
    cy.get("button.next").eq(0).click({force:true})
    cy.contains('Mathematics Test1').should('be.visible')
    //click on Done button
    cy.get("button.next").contains('Done').click({force:true})
    })
});