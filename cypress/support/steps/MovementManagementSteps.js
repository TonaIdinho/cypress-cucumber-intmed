/* global Given, Then, When */
import MovementManagementPage from '../pageobjects/MovementManagementPage'
const movementManagementPage = new MovementManagementPage

Given("que estou na tela inicial do site", () => {
    lancarMovimentacaoPage.homePage()
})

When("clico no menu criar movimentacao", () => {
    lancarMovimentacaoPage.newMovementMenu()
})

And("preencho todos os campos", () => {
    lancarMovimentacaoPage.fillValidFields()
})

And("clico em salvar", () => {
    lancarMovimentacaoPage.clickSave()
})

Then("deve ser exibida mensagem de sucesso ao adicionar movimentacao", () => {
    lancarMovimentacaoPage.successMovementMessage()
})

And("preencho campos deixando datas em branco", () => {
    lancarMovimentacaoPage.noDateFieldFill()
})

Then("deve ser exibida mensagem de erro de campos obrigatorios", () => {
    lancarMovimentacaoPage.errorMovementMessage()
})

And("preencho campos deixando datas com formato incorreto", () => {
    lancarMovimentacaoPage.invalidDateFieldFill()
})

Then("deve ser exibida mensagem de erro de data invalido", () => {
    lancarMovimentacaoPage.invalidDateMessage()
})

And("preencho campos deixando datas movitenção com data futura", () => {
    lancarMovimentacaoPage.futureDateFieldFill()
})
     
Then("deve ser exibida mensagem de erro de data futura", () => {
    lancarMovimentacaoPage.errorFutureDateMessage()
})

When("clico no menu contas", () => {
    movimentacaoPage.clickBillsMenu()
})

And("clico submenu Listar", () => {
    movimentacaoPage.billsList()
})

And("clico no icone de exclusão de uma conta com movimentacao", () => {
    movimentacaoPage.deleteBillsMovement()
})

Then("deve ser exibida mensagem de erro ao tentar excluir conta", () => {
    movimentacaoPage.deleErrorMessage()
})

And("clico submenu Adicionar", () => {
    movimentacaoPage.addSubmenu()
})

And("insiro nome de conta já existente", () => {
    movimentacaoPage.addBills()
})  

Then("deve ser exibida mensagem de erro ao tentar inserir conta com mesmo nome", () => {
    movimentacaoPage.errorAddMessage()
})