context('student-my-activity-section', () => {
    it('My Activity - View all specific Subjectwise Test Results',function(){
      cy.after()
      cy.get('a[href="#/home"]').contains("Home").click()
      cy.title().should('eq', 'Home')
      cy.get('mat-icon').contains('menu').click()
      cy.get('span.mat-button-wrapper').contains("My Activity").click()
       //  cy.get('#tests > tbody > tr:nth-child(4) > td:nth-child(3)')
     cy.get('#tests > tbody > tr td:nth-child(3)').each(($e,index,$list) => { //eq(0)
        const text = $e.text()
        if(text.includes('Mathematics')){
           cy.get('#tests > tbody > tr td:nth-child(7)').eq(0).within(() =>{
               cy.get('button.btn.btn-xs.btn-default').eq(0).click({force:true})
           })
        }
    })
    })
});