context('student-practice', () => {
    it('Practice - test',function(){
      cy.after()
      cy.get('a[href="#/learn"]').contains("Practice").click()
      cy.title().should('eq', 'Practice')
      cy.get('mat-icon').contains('menu').click()
      cy.get(".card-subject-body").eq(1).click();//select subject
      cy.get(".chapter_name").eq(0).click(); //select topics
      cy.get(".chapter_name").eq(0).click(); //select subtopics
      cy.wait(2000);
      let optionindex = 0;
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