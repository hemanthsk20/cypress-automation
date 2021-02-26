context('studen-practice', () => {
    // before(() => {
        // cy.visit('https://qa.student.wexl.in/')
        // cy.get('input[name="username"]').eq(0).type("suryabcs",{force: true})
        //   cy.get('input[name="password"]').eq(0).type("12345678",{force: true})
        //   cy.get('input[value="Sign in"]').eq(0).click({force: true})
        // cy.login('suryabcs','12345678')
    //     cy.title().should('eq', 'Home')
    // })
    it('Practice - test',function(){
      cy.title().should('eq', 'Home')
      let optionindex = 0;
      cy.get('mat-icon').contains('menu').click()
      cy.contains("Practice").click()
      cy.title().should('eq', 'Practice')
      cy.get('mat-icon').contains('menu').click()
      cy.get(".card-subject-body").eq(1).click();//select topics
      cy.get(".chapter_name").eq(0).click(); //select subtopics
      cy.get(".chapter_name").eq(0).click();
      cy.wait(2000);
      cy.get("input[name='opt"+optionindex+"'][type='radio']").eq(0).click({force: true})
      cy.get('button').contains('Check').click()
      cy.contains('Continue').click()
      optionindex++;
      cy.wait(2000);
      cy.get("input[name='opt"+optionindex+"'][type='radio']").eq(0).click({force: true})
      cy.get("#questionSubmit").click();
      cy.get("button[type='button']").contains("Yes").click();
      cy.get('.breadcrumb-item').contains('Home').click()

    })
});