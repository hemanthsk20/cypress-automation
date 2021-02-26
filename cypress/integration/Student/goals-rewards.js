describe('student-goals-and-rewards', () => {

    it('view-tests-based-on-parent-goals',function(){
      // cy.title().should('eq', 'Home')
      // cy.get('mat-icon').contains('menu').click()
      cy.after()
      cy.get("a[href='#/rewards']").contains("Goals & Rewards").click()
      cy.title().should('eq', 'Goals & Rewards')
      cy.get('mat-icon').contains('menu').click()
      cy.get("button.pull-right.btn.btn-primary.mt-1").contains("View Tests").eq(0).click()
      cy.contains("All school and expert tests for all chapters")
      cy.wait(2000);
    })

    it('attend-tests-based-on-parent-goals',function(){
        // cy.title().should('eq', 'Home')
        // cy.get('mat-icon').contains('menu').click()
        cy.after()
        cy.get("a[href='#/rewards']").contains("Goals & Rewards").click()
        cy.title().should('eq', 'Goals & Rewards')
        cy.get('mat-icon').contains('menu').click()
        cy.get("button.pull-right.btn.btn-primary.mt-1").contains("View Tests").eq(0).click()
        cy.contains("All school and expert tests for all chapters")
        cy.wait(2000);
        let optionindex = 0;
        cy.get(".test-heading").eq(0).click();
        for(let i=0; i < 15 ; i++){
        cy.get("input[name='opt"+i+"'][type='radio']").eq(optionindex).click({force: true})
      }
        cy.get("#questionSubmit").click();
        cy.get("button[type='button']").contains("Yes").click();
        cy.wait(2000);
        cy.get('button[class="close"]').click();
        cy.contains("Test Results");
    })
    it('check-student-eligible-to-redeem-rewards',function(){
        // cy.title().should('eq', 'Home')
        // cy.get('mat-icon').contains('menu').click()
        cy.after()
        cy.get("a[href='#/rewards']").contains("Goals & Rewards").click()
        cy.title().should('eq', 'Goals & Rewards')
        cy.get('mat-icon').contains('menu').click()
        cy.get('#custom-content-below-profile-tab').contains('Rewards').eq(0).click()
        cy.wait(1000)
        cy.get('em.fa.fa-plus.item-qty').eq(0).click()
        cy.get('button.btn.btn-info').contains("BUY").click()
        cy.get('.modal-title').contains("Insufficient Points")
    })


});