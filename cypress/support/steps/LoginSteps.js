/* global Given, Then, When */
import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que o usuário esteja na tela de login do site 'Seu Barriga'", () => {
    loginPage.homePage()
})

When("preencher todos os campos com credenciais válidas", () => {
    loginPage.validFieldsFill()
})

And("clicar no botão 'Entrar'", () => {
    loginPage.clickEnterButton()
})

Then("deverá ser redirecionado para a tela inicial do site", () => {
    loginPage.successMessage()
})