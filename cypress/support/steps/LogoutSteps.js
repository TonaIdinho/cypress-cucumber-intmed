/* global Given, Then, When */
import LogoutPage from '../pageobjects/LogoutPage'
const logoutPage = new LogoutPage

Given("que o usuario esteja logado no site Seu Barriga", () =>{
    logoutPage.homePage()
})
When("clicar no botao Sair na parte superior da tela", () => {
    logoutPage.exitButton()
})
Then("o usuario devera ser redirecionado deslogado para a tela de login do site", () => {
    logoutPage.start()
})