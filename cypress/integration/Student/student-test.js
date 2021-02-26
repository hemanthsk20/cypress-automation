context('student-test', () => {

    it('Student - Test',function(){
      // cy.title().should('eq', 'Home')
      // cy.get('mat-icon').contains('menu').click()
      cy.after()
      cy.get("a[href='#/test']").contains("Test").click()
      cy.title().should('eq', 'Test')
      cy.get('mat-icon').contains('menu').click()
      cy.get(".card-subject-body").eq(1).click();
      cy.get(".test-heading").eq(0).click();
      cy.wait(2000);
      // cy.get("input[name='opt"+optionindex+"'][type='radio']").eq(0).click({force: true})
      let optionindex = 0;
      for(let i=0; i < 15; i++){
        cy.get("input[name='opt"+i+"'][type='radio']").eq(optionindex).click({force: true})
      }
      cy.get("#questionSubmit").click();
      cy.get("button[type='button']").contains("Yes").click();
      cy.wait(2000);
      cy.get('button[class="close"]').click();
      cy.contains("Test Results");
    })
});