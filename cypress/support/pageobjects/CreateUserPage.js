/// <reference types="Cypress" />

import CreateUserElements from '../elements/CreateUserElements'
const createUserElements = new CreateUserElements
const url = Cypress.config("baseUrl")

class RegisterPage {

    homePage(){
        cy.visit(url)        
    }

    clickNewUserButton(){
        cy.get(createUserElements.newUserButton()).click()        
    }

    fillValidFields(){
        cy.get(createUserElements.inputName()).type('User Test124578')    
        cy.get(createUserElements.inputEmail()).type('user.test124578@gmail.com')      
        cy.get(createUserElements.inputPassword()).type('usertest124578')
    }

    registerButton(){
        cy.get(createUserElements.registerButton()).click()
    }

    successMessage(){
        cy.get(createUserElements.alert()).should('contain','Usuário inserido com sucesso')
    }   
}
export default RegisterPage;
