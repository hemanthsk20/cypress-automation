context('student-practice', () => {
    it('Practice - test',function(){
      cy.after()
      cy.get('a[href="#/home"]').contains("Home").click()
      cy.title().should('eq', 'Home')
      cy.get('mat-icon').contains('menu').click()
      cy.get('span.mat-button-wrapper').contains("My Activity").click()
       //  cy.get('#tests > tbody > tr:nth-child(4) > td:nth-child(3)')
     cy.get('#tests > tbody > tr td:nth-child(3)').each(($e,index,$list) => {
        const text = $e.text()
        if(text.includes('English')){
           cy.get('#tests > tbody > tr td:nth-child(7)').eq(1).within(() =>{
               cy.get('button[data-target="#modal-default"]').click({force:true})
           })
        }
    })
    })
});