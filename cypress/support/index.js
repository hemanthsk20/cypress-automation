// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(() => {


    let current_test_suite_name = Cypress.mocha.getRunner().suite.ctx.currentTest.parent.title;
    let temp_test_suite_name = current_test_suite_name.toLowerCase();
    if(temp_test_suite_name.includes("parent") == true){
        //Parent Login
        cy.fixture('parent').then((login_data) => {
            
            let current_test_case = Cypress.mocha.getRunner().suite.ctx.currentTest.title;
            
            let skipped_test_suites = ["Parent SignUp", "Parent Forgot Password"];
            let skipped_test_cases = ["User is not able to Login with invalid Username and invalid Password", 
                                        "User is not able to Login with blank Username or Password"];
            
            if(skipped_test_suites.indexOf(current_test_suite_name) == -1 
            && skipped_test_cases.indexOf(current_test_case) == -1){

                //Login
                cy.visit("https://qa.parent.wexl.in/");
                
                cy.get("#signInFormUsername")
                .type(login_data.user_name, {force: true})
                
                cy.get("#signInFormPassword")
                .type(login_data.password, {force: true})

                cy.get("input[name='signInSubmitButton']").eq(1)
                .click({force: true});
            }
        });
    } else if(temp_test_suite_name.includes("student") == true){
        //Student Login
        
        cy.fixture('student').then((login_data) => {
            
            let current_test_case = Cypress.mocha.getRunner().suite.ctx.currentTest.title;
            
            let skipped_test_suites = ["Student SignUp", "Student Forgot Password"];
            let skipped_test_cases = ["User is not able to Login with invalid Username and invalid Password", 
                                        "User is not able to Login with blank Username or Password"];
            
            if(skipped_test_suites.indexOf(current_test_suite_name) == -1 
            && skipped_test_cases.indexOf(current_test_case) == -1){

                //Login
                cy.visit("https://qa.student.wexl.in");
                
                cy.get("#signInFormUsername")
                .type(login_data.user_name, {force: true})
                
                cy.get("#signInFormPassword")
                .type(login_data.password, {force: true})

                cy.get("input[name='signInSubmitButton']").eq(1)
                .click({force: true});
            }
        });

    } else{
        cy.fixture('teacher').then((login_data) => {
            
            let current_test_case = Cypress.mocha.getRunner().suite.ctx.currentTest.title;
            
            let skipped_test_suites = ["Teacher SignUp", "Teacher Forgot Password"];
            let skipped_test_cases = ["User is not able to Login with invalid Username and invalid Password", 
                                        "User is not able to Login with blank Username or Password"];
            
            if(skipped_test_suites.indexOf(current_test_suite_name) == -1 
            && skipped_test_cases.indexOf(current_test_case) == -1){

                //Login
                cy.visit("https://qa.teacher.wexl.in");
                
                cy.get("#signInFormUsername")
                .type(login_data.user_name, {force: true})
                
                cy.get("#signInFormPassword")
                .type(login_data.password, {force: true})

                cy.get("input[name='signInSubmitButton']").eq(1)
                .click({force: true});
            }
        });
    }
    
    
})
afterEach(function () {
    cy.get('.profile-pic').click({force:true});
    cy.contains("Logout").click({force:true});
})
