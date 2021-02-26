context('Teacher- Create Test', () => {

    it('Teacher-Create-Test-flow',function(){
    cy.get('mat-icon').contains('menu').click()
    cy.contains("My Tests").click()
    cy.get("a[href='#/test/test-repository']").contains("Test Repository").click({force:true})
    cy.get('mat-icon').contains('menu').click()
    // cy.get('select[name="myTable_length"]').select('100')
    cy.get('input[type="search"]').type('February Unit Test',{force:true})
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
     cy.contains('Schedule Saved Successfully for TestFebruary Unit Test').should('be.visible')

    })
});