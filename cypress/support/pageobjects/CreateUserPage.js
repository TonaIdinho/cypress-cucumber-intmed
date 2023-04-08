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
        cy.get(createUserElements.inputName()).type('Usedge Test')    
        cy.get(createUserElements.inputEmail()).type('usedge.test@testend.com')      
        cy.get(createUserElements.inputPassword()).type('abcd,1234')
    }

    registerButton(){
        cy.get(createUserElements.registerButton()).click()
    }

    successMessage(){
        cy.get(createUserElements.alert()).should('contain','Usuário inserido com sucesso')
    }   
}
export default RegisterPage;
