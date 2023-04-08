/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
   
    homePage(){
        cy.visit(url)        
    }

    validFieldsFill(){
        cy.get(loginElements.inputEmail()).click().type("angelinarodrigues@teste.com")
        cy.get(loginElements.inputPassword()).click().type('testeadmin')       
    }

    clickEnterButton(){
        cy.get(loginElements.enterButton()).click()       
    }
    
    successMessage(){
        cy.get(loginElements.alert()).contains('Bem vindo')
    }
   
    invalidFieldsFill(){
        cy.get(loginElements.inputEmail()).click().type("email@invalido.com")
        cy.get(loginElements.inputPassword()).click().type('testeinvalido') 
    }

    errorMessage(){
        cy.get(loginElements.alert()).contains('Problemas com o login do usuário')
    }   
}
export default LoginPage;
