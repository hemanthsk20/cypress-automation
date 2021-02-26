context('login', () => {
    before(() => {
      cy.visit('https://qa.teacher.wexl.in/')
      cy.get('input[name="username"]').eq(0).type("hemanth20skmurthy94@gmail.com",{force: true})
        cy.get('input[name="password"]').eq(0).type("Hemanth20*",{force: true})
        cy.get('input[value="Sign in"]').eq(0).click({force: true})
    })
    it('my-classes',function(){
        cy.contains('My Classes').click({force:true})
        cy.contains('Ninth Grade - IX').click({force:true})
        cy.get('#classStudents > tbody > tr > td:nth-child(2) > a').contains('Hemanth Murthy').click({force:true})
       //  cy.get('#tests > tbody > tr:nth-child(4) > td:nth-child(3)')
        cy.get('#tests > tbody > tr td:nth-child(3)').each(($e,index,$list) => {
            const text = $e.text()
            if(text.includes('Mathematics')){
               cy.get('#tests > tbody > tr td:nth-child(7)').eq(index).within(() =>{
                   cy.get('button[data-target="#modal-default"]').click({force:true})
               })
            }
        })
        
       
       })
});