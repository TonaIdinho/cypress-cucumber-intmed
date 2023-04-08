/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
   
    homePage(){
        cy.visit(url)        
    }

    validFieldsFill(){
        cy.get(loginElements.inputEmail()).click().type("user.test112245780@gmail.com")
        cy.get(loginElements.inputPassword()).click().type('usertest112245780')       
    }

    clickEnterButton(){
        cy.get(loginElements.enterButton()).click()       
    }
    
    successMessage(){
        cy.get(loginElements.alert()).contains('Bem vindo')
    }
   
    invalidFieldsFill(){
        cy.get(loginElements.inputEmail()).click().type("email12345678@invalido.com")
        cy.get(loginElements.inputPassword()).click().type('testeinvalido') 
    }

    errorMessage(){
        cy.get(loginElements.alert()).contains('Problemas com o login do usuário')
    }   
}
export default LoginPage;
