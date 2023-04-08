/* global Given, Then, When */
import MovementManagementPage from '../pageobjects/MovementManagementPage'
const movementManagementPage = new MovementManagementPage

Given("que o usuario esteja na tela inicial do site Seu Barriga", () => {
    MovementManagementPage.homePage()
})

When("clicar na opçao Criar Movimentaçao", () => {
    MovementManagementPage.newMovementMenu()
})

And("preencher todos os campos", () => {
    MovementManagementPage.fillValidFields()
})

And("clicar em salvar", () => {
    MovementManagementPage.clickSave()
})

Then("deve ser exibida mensagem de sucesso ao adicionar movimentacao", () => {
    MovementManagementPage.successMovementMessage()
})

When("clicar na opçao Criar Movimentaçao", () => {
    MovementManagementPage.newMovementMenu()
})

And("preencher campos deixando datas em branco", () => {
    MovementManagementPage.noDateFieldFill()
})

Then("deve ser exibida mensagem de erro de campos obrigatorios", () => {
    MovementManagementPage.errorMovementMessage()
})

When("clicar na opçao Criar Movimentaçao", () => {
    MovementManagementPage.newMovementMenu()
})

And("preencher campos deixando datas com formato incorreto", () => {
    MovementManagementPage.invalidDateFieldFill()
})

Then("deve ser exibida mensagem de erro de data invalido", () => {
    MovementManagementPage.invalidDateMessage()
})

When("clicar na opçao Criar Movimentaçao", () => {
    MovementManagementPage.newMovementMenu()
})

And("preencher campos deixando datas movitenção com data futura", () => {
    MovementManagementPage.futureDateFieldFill()
})
     
Then("deve ser exibida mensagem de erro de data futura", () => {
    MovementManagementPage.errorFutureDateMessage()
})

When("clicar na opçao Contas", () => {
    MovementManagementPage.clickBillsMenu()
})

And("clicar submenu Listar", () => {
    MovementManagementPage.billsList()
})

And("clicar no icone de exclusão de uma conta com movimentacao", () => {
    MovementManagementPage.deleteBillsMovement()
})

Then("deve ser exibida mensagem de erro ao tentar excluir conta", () => {
    MovementManagementPage.deleErrorMessage()
})

When("clicar no na opção Contas", () => {
    MovementManagementPage.clickBillsMenu()
})

And("clicar no submenu Adicionar", () => {
    MovementManagementPage.addSubmenu()
})

And("salvar um nome de conta ja existente", () => {
    MovementManagementPage.addBills()
})  

Then("devera ser exibida uma mensagem de erro", () => {
    MovementManagementPage.errorAddMessage()
})