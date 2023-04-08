/* global Given, Then, When */
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que o usuário esteja na tela de login do site Seu Barriga", () => {
    loginPage.homePage()
})

When("preencher todos os campos com credenciais validas", () => {
    loginPage.validFieldsFill()
})

And("clicar no botao Entrar", () => {
    loginPage.clickEnterButton()
})

Then("devera ser redirecionado para a tela inicial do site", () => {
    loginPage.successMessage()
})
 
When("preencher pelo menos um campo com dados invalidos", () => {
   loginPage.invalidFieldsFill()
})

Then("o usuario devera ser impedido de efetuar o login", () => {
    loginPage.errorMessage()
})
