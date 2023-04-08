/* global Given, Then, When */
import CreateUserPage from '../pageobjects/CreateUserPage'
const createUserPage = new CreateUserPage

Given("que o usuario esteja na tela de login do site Seu Barriga", () => {
    CreateUserPage.homePage()
})

When("o usuario clicar na opçao Novo usuario? no canto superior esquerdo", () => {
    CreateUserPage.clickNewUserButton()
})

And("preencher todos os campos com credenciais validas", () => {
    CreateUserPage.fillValidFields()
})

And("clicar no botao Cadastrar", () => {
    CreateUserPage.registerButton()
})

Then("deve ser a exibida a mensagem Usuario inserido com sucesso", () => {
    CreateUserPage.successMessage()
})