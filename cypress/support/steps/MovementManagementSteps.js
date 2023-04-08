/* global Given, Then, When */
import MovementManagementPage from '../pageobjects/MovementManagementPage'
const movementManagementPage = new MovementManagementPage

Given("que o usuario esteja na tela inicial do site Seu Barriga", () => {
    movementManagementPage.homePage()
})

When("clicar na opçao Criar Movimentaçao", () => {
    movementManagementPage.newMovementMenu()
})

And("preencher todos os campos", () => {
    movementManagementPage.fillValidFields()
})

And("clicar em salvar", () => {
    movementManagementPage.clickSave()
})

Then("deve ser exibida mensagem de sucesso ao adicionar movimentacao", () => {
    movementManagementPage.successMovementMessage()
})

When("clicar na opçao Criar Movimentaçao", () => {
    movementManagementPage.newMovementMenu()
})

And("preencher campos deixando datas em branco", () => {
    movementManagementPage.noDateFieldFill()
})

Then("deve ser exibida mensagem de erro de campos obrigatorios", () => {
    movementManagementPage.errorMovementMessage()
})

When("clicar na opçao Criar Movimentaçao", () => {
    movementManagementPage.newMovementMenu()
})

And("preencher campos deixando datas com formato incorreto", () => {
    movementManagementPage.invalidDateFieldFill()
})

Then("deve ser exibida mensagem de erro de data invalido", () => {
    movementManagementPage.invalidDateMessage()
})

When("clicar na opçao Criar Movimentaçao", () => {
    movementManagementPage.newMovementMenu()
})

And("preencher campos deixando datas movitenção com data futura", () => {
    movementManagementPage.futureDateFieldFill()
})
     
Then("deve ser exibida mensagem de erro de data futura", () => {
    movementManagementPage.errorFutureDateMessage()
})

When("clicar na opçao Contas", () => {
    movementManagementPage.clickBillsMenu()
})

And("clicar submenu Listar", () => {
    movementManagementPage.billsList()
})

And("clicar no icone de exclusão de uma conta com movimentacao", () => {
    movementManagementPage.deleteBillsMovement()
})

Then("deve ser exibida mensagem de erro ao tentar excluir conta", () => {
    movementManagementPage.deleErrorMessage()
})

When("clicar no na opção Contas", () => {
    movementManagementPage.clickBillsMenu()
})

And("clicar no submenu Adicionar", () => {
    movementManagementPage.addSubmenu()
})

And("salvar um nome de conta ja existente", () => {
    movementManagementPage.addBills()
})  

Then("devera ser exibida uma mensagem de erro", () => {
    movementManagementPage.errorAddMessage()
})