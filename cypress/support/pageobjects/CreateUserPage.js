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
        cy.get(createUserElements.inputName()).type('User Test112245780')    
        cy.get(createUserElements.inputEmail()).type('user.test112245780@gmail.com')      
        cy.get(createUserElements.inputPassword()).type('usertest112245780')
    }

    registerButton(){
        cy.get(createUserElements.registerButton()).click()
    }

    successMessage(){
        cy.get(createUserElements.alert()).should('contain','Usuário inserido com sucesso')
    }   
}
export default RegisterPage;
