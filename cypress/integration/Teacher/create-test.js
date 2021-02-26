context('Teacher- Create Test', () => {

    it('Teacher-Create-Test-flow',function(){
    cy.get('mat-icon').contains('menu').click()
    cy.contains("My Tests").click()
    cy.get("a[href='#/test/test-repository']").contains("Test Repository").click({force:true})
    cy.get('mat-icon').contains('menu').click()
    cy.get(".create-test").eq(0).click()
    //Enter Test name
    cy.get(".form-pad").eq(0).clear().type("Science Test2",{force:true})
    //Uncheck checkboxes
    cy.get("input[type='checkbox']").eq(9).uncheck()
    cy.get("input[type=checkbox]").eq(10).uncheck()
    cy.get("input[type=checkbox]").eq(11).uncheck()
    //Select Boar,Grade and subject
    cy.get("select[formcontrolname=board]").select("CBSE")
    cy.get("select[formcontrolname=grade]").select("Ninth Grade - IX")
    cy.get("select[formcontrolname=subject]").select("Science")
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
    cy.contains('Science Test2').should('be.visible')
    //click on Done button
    cy.get("button.next").contains('Done').click({force:true})
    })
    it('Teacher-Schedule-Test-flow',function(){
        cy.get('mat-icon').contains('menu').click()
        cy.contains("My Tests").click()
        cy.get("a[href='#/test/test-repository']").contains("Test Repository").click({force:true})
        cy.get('mat-icon').contains('menu').click()
        // cy.get('select[name="myTable_length"]').select('100')
        cy.get('input[type="search"]').type('Science Test2',{force:true})
        cy.get('#myTable > tbody > tr td:nth-child(5)').within(()=>{
        cy.get('em.fa.fa-calendar.action-icons').click({force:true})
        })
         // Student Id
         cy.get('input[value="student"]').click({force:true})
         cy.wait(1000)
         cy.get('.dropdown-toggle').contains("Select Student").click({force:true})
         cy.wait(1000)
         cy.get('ul[x-placement="bottom-start"]').contains('li','Hemanth Murthy').within(()=>{
             cy.get('input[type="checkbox"]').click({force:true})
         })
         cy.get('input[type="datetime-local"]').eq(0).type('2020-02-26T14:30')
         cy.get('input[type="datetime-local"]').eq(1).type('2020-02-28T15:30')
         cy.get('input[formcontrolname="duration"]').clear().type('30')
         cy.get('[formcontrolname="message"]').clear().type('Good luck with the test')
         cy.get('.modal-btn').contains('SCHEDULE').click({force:true})
         cy.contains('Schedule Saved Successfully for TestScience Test2').should('be.visible')
    
        })
        it('Teacher-Delete-Test-flow',function(){
            cy.get('mat-icon').contains('menu').click()
            cy.contains("My Tests").click()
            cy.get("a[href='#/test/test-repository']").contains("Test Repository").click({force:true})
            cy.get('mat-icon').contains('menu').click()
            // cy.get('select[name="myTable_length"]').select('100')
            cy.get('input[type="search"]').type('Science Test2',{force:true})
            cy.get('#myTable > tbody > tr td:nth-child(5)').within(()=>{
            cy.get('em.fas.fa-trash.action-icons').click({force:true})
            })
            cy.get('button.btn.btn-outline-primary.btn-flat.modal-btn').contains("DELETE").click({force:true})
            })
});