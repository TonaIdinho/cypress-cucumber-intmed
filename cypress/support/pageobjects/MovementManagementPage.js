/// <reference types="Cypress" />

import MovementManagementElements from '../elements/MovementManagementElements'
const movementManagementElements = new MovementManagementElements
const url = Cypress.config("baseUrl")

class MovementManagementPage {
    
    homePage(){
        cy.visit(url)
        cy.get(movementManagementElements.inputEmail()).click().type("angelinarodrigues@teste.com")
        cy.get(movementManagementElements.inputPassword()).click().type('testeadmin')  
        cy.get(movementManagementElements.enterButton()).click()
        cy.get(movementManagementElements.alert()).contains('Bem vindo')       
    }

    newMovementMenu(){
        cy.get(movementManagementElements.newMovementMenu()).click()
    }

    fillValidFields(){
        cy.get(movementManagementElements.movementDate()).type('09/04/2023')
        cy.get(movementManagementElements.paymentDate()).type('15/04/2023')
        cy.get(movementManagementElements.description()).type('teste movimentação valida')
        cy.get(movementManagementElements.interested()).type('teste')
        cy.get(movementManagementElements.price()).type('1000')
        cy.get(movementManagementElements.paidCheckbox()).click()        
    }

    clickSave(){
        cy.get(movementManagementElements.enterButton()).click()
    }

    successMovementMessage(){
        cy.get(movementManagementElements.alert()).contains('Movimentação adicionada com sucesso!')
    }
    
    noDateFieldFill(){
        cy.get(movementManagementElements.description()).type('teste movimentação sem campo data')
        cy.get(movementManagementElements.interested()).type('teste')
        cy.get(movementManagementElements.price()).type('1000')
        cy.get(movementManagementElements.paidCheckbox()).click()
    }

    errorMovementMessage(){
        cy.get(movementManagementElements.alert()).contains('Data da Movimentação é obrigatório')
    }

    invalidDateFieldFill(){
        cy.get(movementManagementElements.movementDate()).type('09.04.2023')
        cy.get(movementManagementElements.paymentDate()).type('15/04/2023')
        cy.get(movementManagementElements.description()).type('teste movimentação formato data invalida')
        cy.get(movementManagementElements.interested()).type('teste')
        cy.get(movementManagementElements.price()).type('1000')
        cy.get(movementManagementElements.paidCheckbox()).click()
        cy.get(movementManagementElements.enterButton()).click()
    }
   
    invalidDateMessage(){
        cy.get(movementManagementElements.alert()).contains('Data da Movimentação inválida (DD/MM/YYYY)')
    }

    futureDateFieldFill(){
        cy.get(movementManagementElements.movementDate()).type('15/04/2023')
        cy.get(movementManagementElements.paymentDate()).type('15/04/2023')
        cy.get(movementManagementElements.description()).type('teste movimentação data futura')
        cy.get(movementManagementElements.interested()).type('teste')
        cy.get(movementManagementElements.price()).type('1000')
        cy.get(movementManagementElements.paidCheckbox()).click()
        cy.get(movementManagementElements.enterButton()).click()
    }    

    errorFutureDateMessage(){
        cy.get(movementManagementElements.alert()).contains('Data da Movimentação deve ser menor ou igual à data atual')
    }

    clickBillsMenu(){
        cy.get(movimentacaoElements.billsMenu()).click()
    }

    billsList(){
        cy.get(movimentacaoElements.listSubmenu()).click()
    }    

    deleteBillsMovement(){
        cy.get(movimentacaoElements.billsList()).contains('Conta para movimentacoes')
        cy.get(movimentacaoElements.deleteIcon()).click()
    }

    deleErrorMessage(){
        cy.get(movimentacaoElements.alert()).contains('Conta em uso na movimentações')
    }        
      
    addSubmenu(){
        cy.get(movimentacaoElements.addSubmenu()).click()
    }  

    addBills(){       
        
        cy.get(movimentacaoElements.inputBillsName()).type('Conta Teste')
        cy.get(movimentacaoElements.saveButton()).click()
    }

    errorAddMessage(){
        cy.get(movimentacaoElements.alert()).contains('Já existe uma conta com esse nome!')
    }    
}
export default MovementManagementPage;