/// <reference types="Cypress" />

import LogoutElements from '../elements/LogoutElements'
const logoutElements = new LogoutElements
const url = Cypress.config("baseUrl")


class LogoutPage {
   
    homePage(){
        cy.visit(url)
        cy.get(logoutElements.inputEmail()).click().type("user.test112245780@gmail.com")
        cy.get(logoutElements.inputPassword()).click().type('usertest112245780')  
        cy.get(logoutElements.enterButton()).click()
        cy.get(logoutElements.alert()).contains('Bem vindo')     
    }

    exitButton(){
        cy.get(logoutElements.exitButton()).click()
    }

    start(){
        cy.get(logoutElements.emailTitle()).contains('Email')
    }
}
export default LogoutPage;